import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import MultiSelect from "react-multiple-select-dropdown-lite";

import { toast } from "react-toastify";
import Select from "react-select";
const StudentDetails = () => {
  const { _id } = useParams();
  const [course, SetsCourses] = useState([]);
  const [sCourses, SetssCourses] = useState([]);
  const [courseintrestvalue, Setcourseintrestvalue] = useState([]);

  const [value, Setvalue] = useState([]);
  const Gender = ["male", "female", "other"];
  const [title, Settitle] = useState("");
  const [student, SetStudent] = useState([]);

  console.log(sCourses);
  console.log(value);

  const getCurses = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/course/all"
      );
      console.log(response.data.course);
      const data = response.data.course;

      const options = data.map((item) => ({
        value: item.title,
        label: item.title,
      }));

      SetsCourses(options);
    } catch (error) {
      console.log(error);
    }
  };

  // function handleSelectChange(val) {
  // Setvalue = Array.isArray(e) ? e.map(e.value) : [];
  // Setvalue({ value: data.target.value });
  // console.log(data.target.value);
  // console.log(data.data(e) ? e.map(e.value) : []);

  // Setvalue([val]);
  // Setcourseintrestvalue([val]);
  // SetStudent({
  //   ...student,
  //   courseintrest: val,
  // });
  // }

  const handleSelectChange = (val) => {
    Setcourseintrestvalue([val]);
  };

  useEffect(() => {
    getCurses();
  }, []);

  // course Api

  console.log(student);

  const getStudentData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/${_id}`
      );

      SetStudent(response.data.student);
      console.log(response.data.student);
      Settitle(response.data.student);
      const datas = response.data.student.courseintrest;
      const options = datas.map((item) => item);
      SetssCourses(options);
      console.log(datas);
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
    data.append("title", title);
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
    data.append("courseintrest", courseintrestvalue);
    data.append("status", student.status);
    data.append("totalcoursefees", student.totalcoursefees);
    data.append("depositedfee", student.totalcoursefees);
    data.append("feeschedule", student.feeschedule);
    data.append("anyotherforoffice", student.anyotherforoffice);
    data.append("batch_starting_time", student.batch_starting_time);
    data.append("batch_ending_time", student.batch_ending_time);
    data.append("address", student.address);

    console.log(data.student.experience);
    try {
      await axios.patch(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/edit/${_id}`,
        data
      );
      toast.success("Student Edited Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Student diatlis System</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold">Student Details</h4>
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                            // required
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
                        <input
                          type="date"
                          className=" datebirth"
                          value={student.dob}
                          onChange={(e) =>
                            SetStudent({
                              ...student,
                              dob: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">age: </label>
                        <input
                          type="text"
                          // required
                          className="datebirth"
                          defaultValue={student.age}
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
                        {Gender.map((item, index) => {
                          return (
                            <>
                              <label key={index}>
                                <input
                                  type="radio"
                                  name="gender"
                                  defaultValue={student.gender}
                                  onChange={(e) =>
                                    SetStudent({
                                      ...student,
                                      gender: e.target.value,
                                    })
                                  }
                                  className="mx-3"
                                />
                                {item}
                              </label>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Blood Group: </label>
                        <input
                          type="text"
                          // required
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
                          // required
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
                          // required

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
                        <label>{sCourses}</label>

                        {/*      <div className="data-tab-wrapp">
                           <span>data</span>
                           <i className="fa-solid fa-xmark cut-icon"></i>
                  
                        </div>*/}
                        {/*      {value.map((item) => {
                          return (
                            <>
                              <label>{item.value}</label>
                            </>
                          );
                        })}*/}
                        <div>
                          <MultiSelect
                            onChange={handleSelectChange}
                            options={course}

                            // value={course}
                            // defaultValue={sCourses}
                          />

                          {/*  <Select
                            options={course}
                            isMulti
                            closeMenuOnSelect={false}
                            value={course.value}
                            // value={sCourses}
                            defaultValue={sCourses}
                            onChange={handleSelectChange}
                          />
                          */}
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
                          // required
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
                          // required
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
                          // required
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
                          // required
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
                          // required
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
                          // required
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

export default StudentDetails;
