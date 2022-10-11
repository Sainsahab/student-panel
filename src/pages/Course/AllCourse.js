import React, { useEffect, useState } from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
const AllCourse = () => {
  const [course, Setcourse] = useState([]);
  const [currentPagenation, setcurrentPagenation] = useState("");
  const [page, setPage] = useState(1);
  console.log(course);
  const getCurses = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/course/all"
      );
      Setcourse(response.data.course);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurses();
  }, [page]);

  const deleteCourse = async (_id) => {
    try {
      const response = await axios.delete(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/course/delete/${_id}`
      );
      toast.success("Course Delete");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>All Course Infonic Query Management System</title>
      </Helmet>
      <Navbar />
      <div className="py-3">
        <div className="container">
          <h2 className="our-facultys">
            {" "}
            Our Course{" "}
            <Link to="/add-courses" className="add-facultybtn">
              Add Course <i className="fa-regular fa-pen-to-square me-3"></i>
            </Link>
          </h2>
          <div className="row">
            <div className="col-md-12">
              <div className="table table-wrapp">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Discription</th>
                      <th scope="col" className="actionColumn">
                        Duration
                      </th>
                      <th scope="col">fees</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  {course.map((item, index) => {
                    return (
                      <>
                        <tbody>
                          <tr key={index}>
                            <td id="profileColumn" className="profileColumn">
                              <div className="profile_and_premium">
                                <div className="text">
                                  <span className="student-nametag">
                                    {item.title}
                                  </span>{" "}
                                </div>
                              </div>
                            </td>
                            <td className="status statusColumn">
                              {item.discription}
                            </td>
                            <td className="status statusColumn">
                              {item.duration}
                            </td>
                            <td className="applicationcountColumn">
                              {item.fees}
                            </td>

                            <td className="optionsColumn">
                              <Link
                                to={"/edit-course/" + item._id}
                                className="edit-icon"
                              >
                                <i className="fa-regular fa-pen-to-square"></i>
                              </Link>
                              <span
                                onClick={() => deleteCourse(item._id)}
                                className="ms-3"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </span>
                              <div className="col-2">
                                <div className="profile-overview">
                                  <div>
                                    <a
                                      href={item.file}
                                      target="blank"
                                      rel="noreferrer"
                                    >
                                      <i className="fa-solid fa-download me-2"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </>
                    );
                  })}
                </table>
              </div>
              {/*  <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => setPage(e.selected + 1)}
                pageRangeDisplayed={currentPagenation.currentPage}
                pageCount={currentPagenation.totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="reactpagination-wrapp"
              />*/}
            </div>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};

export default AllCourse;
