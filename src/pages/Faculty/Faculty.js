import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import facultydata from "../Faculty/facultydata.json";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";

const Faculty = () => {
  const [faculty, Setfaculty] = useState([]);
  const [currentPagenation, setcurrentPagenation] = useState("");
  const [page, setPage] = useState(1);

  console.log(faculty);
  const getFaculty = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/faculty/all"
      );
      Setfaculty(response.data.faculty);
      setcurrentPagenation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFaculty();
  }, [page]);

  const deleteFaculty = async (_id) => {
    try {
      await axios.delete(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/faculty/delete/${_id}`
      );
      toast.success("faculty Delete");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>All Faculty Infonic Query Management System</title>
      </Helmet>
      <Navbar />
      <div className="py-3">
        <div className="container-bg"></div>
        <div className="container">
          <h2 className="our-facultys">
            {" "}
            Our Faculty{" "}
            <Link to="/add-faculty" className="add-facultybtn">
              {" "}
              Add Faculty <i className="fa-regular fa-pen-to-square me-3"></i>
            </Link>
          </h2>
          <div className="row">
            {faculty.map((item, index) => {
              return (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="profile-card-4 text-center">
                      <img
                        src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
                        className="img img-responsive"
                        alt="faculty img"
                      />
                      <div className="profile-content">
                        <div className="profile-name">
                          {item.name}
                          <p>{item.skills}</p>
                        </div>
                        <div className="profile-description">{item.about}</div>
                        <div className="row">
                          <div className="col-6">
                            <div className="edit-icon-wrapp">
                              <Link to={"/faculty-edit-form/" + item._id}>
                                <i className="fa-regular fa-pen-to-square me-3"></i>
                              </Link>
                              <span onClick={() => deleteFaculty(item._id)}>
                                <i className="fa-solid fa-trash"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="profile-overview">
                              <div>
                                <a href={item.fb_link}>
                                  <i className="fa-brands fa-facebook-f m-2"></i>
                                </a>
                                <a href={item.twitter_link}>
                                  <i className="fa-brands fa-twitter m-2"></i>
                                </a>
                                <a href={item.git_link}>
                                  <i className="fa-brands fa-github m-2"></i>
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
      <Footer />
    </>
  );
};

export default Faculty;
