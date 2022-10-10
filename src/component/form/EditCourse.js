import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const EditCourse = () => {
  const { _id } = useParams();
  // const [title, SetTitle] = useState("");
  // const [fees, Setfees] = useState("");
  // const [duration, Setduration] = useState("");
  // const [discription, Setdiscription] = useState("");
  // const [file, Setfile] = useState([]);
  // const [banner, Setbanneer] = useState("");
  const [course, SetCourse] = useState([]);

  console.log(course);
  const navigate = useNavigate();

  const getStudentData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/course/${_id}`
      );
      SetCourse(response?.data?.course);
      console.log(response.data.course);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  const EditCourseData = async (e) => {
    e.preventDefault();

    const data_items = {
      title: course.title,
      fees: course.fees,
      duration: course.duration,
      discription: course.discription,
      file: course.file.name,
      profile: course.banner,
    };

    try {
      const response = await axios.patch(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/course/edit/${_id}`,
        data_items
      );
      navigate("/all-courses");
      toast.success("Course Edited Successfully ");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Course Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold">Edit Course </h4>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <form onSubmit={EditCourseData}>
                  <div className="row py-3">
                    <div className="col-md-4">
                      <div className="studentimg-wrapper">
                        <img
                          src="/img/photo.png"
                          alt="Photo"
                          className="img-fluid"
                        />

                        <label className="file-input-wrapp">
                          <button className="AddPhoto-btn">
                            Add Banner
                            <i className="fa-solid fa-upload ms-2"></i>
                          </button>
                          <input
                            type="file"
                            className="file-input"
                            onChange={(e) => SetCourse(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div
                        className="
      editsinput-wrapp"
                      >
                        <div className="panel-group">
                          <label className="fw-bold">Title : </label>
                          <input
                            type="text"
                            className="editinputform"
                            Value={course.title}
                            onChange={(e) =>
                              SetCourse({ ...course, title: e.target.value })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Fees : </label>
                          <input
                            type="text"
                            className="editinputform"
                            Value={course.fees}
                            onChange={(e) =>
                              SetCourse({ ...course, fees: e.target.value })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Duration:</label>
                          <input
                            type="text"
                            className="editinputform"
                            Value={course.duration}
                            onChange={(e) =>
                              SetCourse({
                                ...course,
                                duration: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Discription:</label>
                          <input
                            type="text"
                            className="editinputform"
                            Value={course.discription}
                            onChange={(e) =>
                              SetCourse({
                                ...course,
                                discription: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold"> Course Pdf: </label>
                          <input
                            type="file"
                            // onChange={(e) => Setfile(e.target.value)}
                            onChange={(e) =>
                              SetCourse({ ...course, file: e.target.files[0] })
                            }
                            required
                            className="pdf-file "
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="studenrsubmit-btn">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditCourse;
