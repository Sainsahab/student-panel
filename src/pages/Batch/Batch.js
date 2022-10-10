import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Moment from "react-moment";

const Batch = () => {
  const [batch, Setbatch] = useState([]);
  const [currentPagenation, setcurrentPagenation] = useState("");
  const [page, setPage] = useState(1);
  const Navigate = useNavigate();

  console.log(batch);
  const getBatch = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/batch/all"
      );
      Setbatch(response.data.batch);
      Navigate("/batchs");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBatch();
  }, [page]);

  const deletebatch = async (_id) => {
    try {
      const response = await axios.delete(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/batch/delete/${_id}`
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
        <title>All Batch Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <div className="py-3">
        <div className="container">
          <h2 className="our-facultys">
            {" "}
            Our Batch{" "}
            <Link to="/add-batch" className="add-facultybtn">
              Add Batch <i className="fa-regular fa-pen-to-square me-3"></i>
            </Link>
          </h2>

          <div className="row">
            <div className="col-md-12">
              <div className="table table-wrapp">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">course Name</th>
                      <th scope="col">Batch start on</th>
                      <th scope="col" className="actionColumn">
                        Faculty
                      </th>
                      <th scope="col">Duration</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>

                  {batch.map((item, index) => {
                    return (
                      <>
                        <tbody>
                          <tr key={index}>
                            <td id="profileColumn" className="profileColumn">
                              <div className="profile_and_premium">
                                <div className="text">
                                  <span className="student-nametag">
                                    {item.course}
                                  </span>{" "}
                                </div>
                              </div>
                            </td>

                            <td className="status statusColumn">
                              <Moment format="DD/MM/YYYY">
                                {item.batch_starting_date}
                              </Moment>
                            </td>

                            <td className="applicationcountColumn">
                              {item.faculty}
                            </td>
                            <td className="applicationcountColumn">
                              {item.duration}
                            </td>

                            <td className="optionsColumns">
                              <Link
                                to={"/edit-batch/" + item._id}
                                className="add-facultybtn ms-3"
                              >
                                <i className="fa-regular fa-pen-to-square me-3"></i>
                              </Link>
                              <span onClick={() => deletebatch(item._id)}>
                                <i class="fa-solid fa-trash"></i>
                              </span>
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
      <Footer />
    </>
  );
};

export default Batch;
