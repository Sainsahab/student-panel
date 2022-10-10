import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
const StudentDetailsview = () => {
  const { _id } = useParams();
  const [student, SetStudent] = useState("");
  console.log(student);
  // const [course, SetCourses] = useState([]);

  const getStudentData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/${_id}`
      );
      SetStudent(response.data.student);
      // SetCourses(response.data.student.courseintrest);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Student-Details Infonic Query Management System</title>
      </Helmet>
      <div>
        <Navbar />
        <div>
          <div className="container-fluid">
            <div className="max-width-container application-container mx-auto mt-3">
              <h4 className="fw-bold">Student Details</h4>
              <div className="breadcrumb-container details-container">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      <span className="student-nametag">{student.title}</span>{" "}
                      <span className="student-nametag">{student.name}</span>
                    </li>
                    <div className="applicant_status ms-auto">
                      {student.status}
                    </div>
                  </ol>
                </nav>
              </div>

              <div id="assesment-container" className="mt-4">
                <div className="application_cover-letter">
                  <div className="first_row">
                    <div className="panel-heading">
                      <h5>
                        Student Information{" "}
                        <Link
                          to={"/student-details/" + _id}
                          className="edit-icon"
                        >
                          <i className="fa-regular fa-pen-to-square"></i>
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <form action="">
                    <div className="row py-3">
                      <div className="col-md-8">
                        <div
                          className="
                editsinput-wrapp"
                        >
                          <div className="panel-group">
                            <label className="fw-bold">Enrollment ID: </label>
                            <span type="text" className="editinputform">
                              {student.enrollmentid}
                            </span>
                          </div>
                          <div className="panel-group">
                            <label className="fw-bold">
                              Name of Candidate:
                            </label>
                            <span className="editinputform">
                              <span className="student-nametag">
                                {student.title}
                              </span>{" "}
                              <span className="student-nametag">
                                {student.name}
                              </span>
                            </span>
                          </div>
                          <div className="panel-group">
                            <label className="fw-bold">Father's Name: </label>
                            <span type="text" className="editinputform">
                              {student.father}
                            </span>
                          </div>
                          <div className="panel-group">
                            <label className="fw-bold">Address: </label>
                            <span className="editinputform">
                              {student.address}
                            </span>
                          </div>
                          <div className="panel-group">
                            <label className="fw-bold">
                              EDU. Qualification:{" "}
                            </label>
                            <span className="editinputform">
                              {student.education}
                            </span>
                          </div>
                          <div className="panel-group">
                            <label className="fw-bold">Experience:</label>
                            <span className="editinputform">
                              {student.exprience}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="studentimg-wrapper">
                          <img
                            src="/img/photo.png"
                            alt="Photo"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Date of Birth: </label>
                          <span type="date" className=" datebirth">
                            <Moment format="YYYY/MM/DD">{student.dob}</Moment>
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">age: </label>
                          <span className="datebirth">
                            <span>{student.age}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Gender: </label>
                          {student.gender}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Blood Group: </label>
                          <span className="datebirth">
                            {" "}
                            {student.bloodgroup}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Mobile number: </label>
                          <span className="datebirth">{student.mobileNo}</span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Email ID: </label>
                          <span className="datebirth">{student.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="panel-group">
                          <label className="fw-bold">Courses:</label>
                          <span className="selectoption">
                            {" "}
                            {student.courseintrest}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="panel-group">
                          <label className="fw-bold">Any Others: </label>
                          <span className="selectoption">
                            {student.anyothers}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h2 className="hadingoffice"> For Office Use</h2>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="panel-group">
                          <label className="fw-bold">Total Course Fee : </label>
                          <span className="selectoption">
                            {student.totalcoursefees}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="panel-group">
                          <label className="fw-bold">Fee Schedule : </label>
                          <span className="selectoption">
                            {student.feescheadule}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="panel-group">
                          <label className="fw-bold">Any Other : </label>
                          <p className="selectoption">
                            {student.anyotherforoffice}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Batch Start Time : </label>
                          <span className="batch-time">
                            {student.batch_starting_time}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="panel-group">
                          <label className="fw-bold">Batch End Time : </label>
                          <span className="batch-time">
                            {student.batch_ending_time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to="/all-students-list">
                      <button type="submit" className="studenrsubmit-btn">
                        Back
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default StudentDetailsview;
