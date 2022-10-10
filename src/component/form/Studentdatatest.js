import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";

import MultiSelect from "react-multiple-select-dropdown-lite";
import { toast } from "react-toastify";
import Select from "react-select";
import Moment from "react-moment";
const Studentdatatest = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [course, SetsCourses] = useState([]);
  const [value, Setvalue] = useState("");
  const [courseintrests, setcourseintrest] = useState([]);
  const [courevalue, setcourevalue] = useState([]);
  const [Courseslist, setsScourses] = useState("");
  const Gender = ["male", "female", "other"];
  const [title, Settitle] = useState("");
  const [student, SetStudent] = useState([]);

  console.log(Courseslist);
  console.log(courseintrests);

  const handleOnchange = (val) => {
    setcourseintrest(val);
  };

  const getCurses = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/course/all"
      );
      console.log(response.data.course);
      const data = response.data.course;
      const options = data.map((item) => item.title);
      SetsCourses(options);
    } catch (error) {
      console.log(error);
    }
  };

  // const changeHandle = (e) => {
  //   Setvalue({
  //     ...student,
  //     [e.target.value]: e.target.value,
  //   });
  // };
  useEffect(() => {
    getCurses();
  }, []);

  console.log(student);
  const getStudentData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/${_id}`
      );

      console.log(response.data.student);
      SetStudent(response.data.student);
      Settitle(response.data.student);
      setsScourses(response.data.student);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentData();
  }, []);

  const setudentData = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("enrollmentid", student.enrollmentid);
    data.append("title", student.title);
    data.append("name", student.name);
    data.append("mobileNo", student.mobileNo);
    data.append("father", student.father);
    data.append("dob", student.dob);
    data.append("gender", student.gender);
    data.append("age", student.age);
    data.append("bloodgroup", student.bloodgroup);
    data.append("anyothers", student.anyothers);
    data.append("email", student.email);
    data.append("education", student.education);
    data.append("experience", student.experience);
    data.append("courseintrest", courseintrests);
    data.append("status", student.status);
    data.append("totalcoursefees", student.totalcoursefees);
    data.append("depositedfee", student.totalcoursefees);
    data.append("feeschedule", student.feeschedule);
    data.append("anyotherforoffice", student.anyotherforoffice);
    data.append("batch_starting_time", student.batch_starting_time);
    data.append("batch_ending_time", student.batch_ending_time);
    data.append("address", student.address);
    console.log(data);
    try {
      await axios.patch(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/edit/${_id}`,
        data
      );
      toast.success("Student Edited Successfully ");
      navigate("/all-students-list");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Student diatlis test System</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold">
              <Link to="/all-students-list" className="pagesLink-wrap">
                Student Details{" "}
              </Link>
            </h4>

            <div className="breadcrumb-container details-container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {student.title} {student.name}
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
                    <h5>Student Information </h5>
                  </div>
                </div>
                <form action="" onSubmit={setudentData}>
                  <div className="row py-3">
                    <div className="col-md-8">
                      <div
                        className="
                editsinput-wrapp"
                      >
                        <div className="panel-group">
                          <label className="fw-bold">Enrollment ID: </label>
                          <input
                            type="text"
                            defaultValue={student.enrollmentid}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                enrollmentid: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Name of Candidate: </label>
                          <input
                            type="text"
                            className="editinputform"
                            defaultValue={student.name}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Father's Name: </label>
                          <input
                            type="text"
                            className="editinputform"
                            defaultValue={student.father}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                father: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Address: </label>
                          <input
                            type="text"
                            className="editinputform"
                            defaultValue={student.address}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                address: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">
                            EDU. Qualification:{" "}
                          </label>
                          <input
                            type="text"
                            defaultValue={student.education}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                education: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Experience:</label>
                          <input
                            type="text"
                            defaultValue={student.experience}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                experience: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
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

                        <label className="file-input-wrapp">
                          <button className="AddPhoto-btn">
                            Add photo<i className="fa-solid fa-upload ms-2"></i>
                          </button>
                          <input type="file" className="file-input" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Date of Birth: </label>

                        <Moment format="YYYY/MM/DD">{student.dob}</Moment>
                        <input
                          format="YYYY/MM/DD"
                          className="datebirth"
                          value={student.dob}
                          // onChange={(e) =>
                          //   SetStudent({
                          //     ...student,
                          //     dob: e.target.value,
                          //   })
                          // }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">age: </label>
                        <input
                          type="text"
                          className="datebirth"
                          Value={student.age}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              age: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Gender: </label>

                        <label>
                          <input
                            type="input"
                            name="gender"
                            className="datebirth"
                            defaultValue={student.gender}
                            onChange={(e) =>
                              SetStudent({
                                ...student,
                                gender: e.target.value,
                              })
                            }
                            // className="mx-3"
                          />
                        </label>
                        {/*{Gender.map((item, index) => {
                          return <></>;
                        })}*/}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Blood Group: </label>
                        <input
                          type="text"
                          className="datebirth"
                          defaultValue={student.bloodgroup}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              bloodgroup: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Mobile number: </label>
                        <input
                          type="number"
                          className="datebirth"
                          defaultValue={student.mobileNo}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              mobileNo: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Email ID: </label>
                        <input
                          type="email"
                          className="datebirth"
                          defaultValue={student.email}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">Courses:</label>
                        <div className="couses-wrappr">
                          {student.courseintrest}
                          {/**    
                               <Select
                            options={course}
                            isMulti
                            value={course.value}
                           
                            onChange={handleOnchange}
                            defaultValue={courevalue}
                            displayValue="key"
                          />*/}
                          {/** 
                          <Multiselect
                            options={course}
                            onChange={handleOnchange}
                            // defaultValue={Courseslist}
                            defaultValue={student.courseintrest}
                          /> */}{" "}
                          <Multiselect
                            showCheckbox
                            className="inputbg-wrap mx-3"
                            isObject={false}
                            onSelect={handleOnchange}
                            options={course}
                            defaultValue={student.courseintrest}
                            selectedValues={Courseslist}
                            onRemove={handleOnchange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Any Others: </label>
                        <input
                          type="text"
                          className="selectoption"
                          defaultValue={student.anyothers}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              anyothers: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Status : </label>

                        <select
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              status: e.target.value,
                            })
                          }
                          className="selectoption"
                          required
                        >
                          <option value="Not Interested">Status</option>
                          <option value="Not Interested">Not Interested</option>
                          <option value="Interested">Interested</option>
                          <option value="Joined">Joined</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <h2 className="hadingoffice"> For Office Use</h2>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Total Course Fees : </label>
                        <input
                          type="text"
                          className="selectoption"
                          defaultValue={student.totalcoursefees}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              totalcoursefees: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Deposited Fee: </label>
                        <input
                          type="text"
                          className="selectoption"
                          defaultValue={student.depositedfee}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              depositedfee: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="panel-group">
                        <label className="fw-bold">Fee Schedule : </label>
                        <input
                          type="text"
                          className="selectoption"
                          defaultValue={student.feeschedule}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              feeschedule: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="panel-group">
                        <label className="fw-bold">Any Other : </label>
                        <input
                          type="text"
                          className="selectoption"
                          defaultValue={student.anyotherforoffice}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              anyotherforoffice: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Batch Start Time : </label>
                        <input
                          type="time"
                          className="batch-time"
                          defaultValue={student.batch_starting_time}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              batch_starting_time: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Batch End Time : </label>
                        <input
                          type="time"
                          className="batch-time"
                          defaultValue={student.batch_ending_time}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              batch_ending_time: e.target.value,
                            })
                          }
                        />
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

export default Studentdatatest;
