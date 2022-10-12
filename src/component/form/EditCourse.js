import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const EditCourse = () => {
  const { _id } = useParams();
  const [course, setCourse] = useState([]);
  console.log(course);
  console.log(course.file);
  const navigate = useNavigate();
  const getCourseData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/course/${_id}`
      );
      setCourse(response?.data?.course);
      console.log(response.data.course);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

 
  const EditCourseData = async (e) => {
    e.preventDefault();

    // const data_items = {
    //   title: course.title,
    //   fees: course.fees,
    //   duration: course.duration,
    //   discription: course.discription,
    //   file: course.file,
    //   profile: course.banner,
    // };

    // e.preventDefault();

    const dataArray = new FormData();

    dataArray.append("title", course.title);
    dataArray.append("fees", course.fees);
    dataArray.append("duration", course.duration);
    dataArray.append("discription", course.discription);
    // dataArray.append("file", course.file);
    for (let i = 0; i <  course.file.length; i++) {
      dataArray.append("file",  course.file[i]);
    }
    console.log(dataArray);

    try {
      const response = await axios.patch(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/course/edit/${_id}`,
        dataArray
      );
      navigate("/all-courses");
      toast.success("Course Edited Successfully ");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
            <h4 className="fw-bold">
              <Link to="/all-courses" className="pagesLink-wrap">
                Edit Course
              </Link>
            </h4>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <form onSubmit={EditCourseData}>
                  <div className="row py-3">
                    <div className="col-12">
                      <div className="editsinput-wrapp">
                        <div className="panel-group">
                          <label className="fw-bold">Title : </label>
                          <input
                            type="text"
                            className="editinputform"
                            value={course.title}
                            onChange={(e) =>
                              setCourse({ ...course, title: e.target.value })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Fees : </label>
                          <input
                            type="text"
                            className="editinputform"
                            value={course.fees}
                            onChange={(e) =>
                              setCourse({ ...course, fees: e.target.value })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Duration:</label>
                          <input
                            type="text"
                            className="editinputform"
                            value={course.duration}
                            onChange={(e) =>
                              setCourse({
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
                            value={course.discription}
                            onChange={(e) =>
                              setCourse({
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
                            className="pdf-file"
                            onChange={(e) =>
                              setCourse({
                                ...course,
                                file: e.target.files,
                              })
                            }
                          />
                          {course.file.map((item)=>{
                            console.log(item)

                          })}
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
