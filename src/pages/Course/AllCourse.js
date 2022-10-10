import React, { useEffect, useState } from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";
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
            {course.map((item, index) => {
              return (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="course-card text-center">
                      <span className="trash-wrap">
                        <i className="fa-solid fa-trash"></i>
                      </span>
                      <img
                        src="https://files.benramsey.com/ws/projects/php/php-logo-banner-1500x630.png"
                        className="img img-responsive"
                        alt="Course Banner img"
                      />
                      <div className="profile-content">
                        <div className="profile-name">{item.title}</div>
                        <div className="profile-description">
                          {item.discription}
                        </div>
                        <div className="row">
                          <div className="col-3">
                            <div className="profile-overview">
                              <div>
                                <span>
                                  <i className="fa-brands fa-slack me-2"></i>
                                  {item.fees}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="profile-overview">
                              <div>
                                <span>
                                  <i className="fa-solid fa-graduation-cap me-1"></i>
                                  {item.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="profile-overview">
                              <div>
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
                              </div>
                            </div>
                          </div>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />{" "}
    </>
  );
};

export default AllCourse;
