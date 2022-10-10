import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import BactchData from "./BatchData.json";
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
            {batch.map((item, index) => {
              return (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="course-card ">
                      <div className="profile-content">
                        <div className="profile-title">{item.course} </div>
                        <div className="profile-overviews">
                          Batch start on :
                          <Moment format="DD/MM/YYYY">
                            {item.batch_starting_date}
                          </Moment>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="profile-overviews">
                              <div>
                                <span>Faculty : {item.faculty}</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="profile-overviews">
                              <div>
                                <span>Duration : {item.duration}</span>
                              </div>
                            </div>
                          </div>
                          {/*
                        
                          <div className="col-12">
                            <div className="profile-overviews">
                              <div>
                                <span>Students: {item.Students} </span>
                              </div>
                            </div>
                          </div>
                        */}
                          <div className="col-md-6">
                            <div className="trashedit-icon-wrapp">
                              <Link
                                to="#"
                                onClick={() => deletebatch(item._id)}
                              >
                                <i class="fa-solid fa-trash"></i>
                              </Link>
                              <Link
                                to={"/edit-batch/" + item._id}
                                className="add-facultybtn ms-3"
                              >
                                <i className="fa-regular fa-pen-to-square me-3"></i>
                              </Link>
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
      <Footer />
    </>
  );
};

export default Batch;
