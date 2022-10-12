import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import { toast } from "react-toastify";
import Moment from "react-moment";
import moment from "moment";
const Studentdatatest = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [course, setsCourses] = useState([]);
  const [student, setStudent] = useState([]);
  // const [course, SetsCourses] = useState([]);
  const [courseintrests, setcourseintrest] = useState("");
  console.log(course);

  const handleOnchange = (val) => {
    setcourseintrest(val);
  };
  const getCurses = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/course/all"
      );
      const data = response.data.course;
      const options = data.map((item) => item.title);
      setsCourses(options);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrder = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/${_id}`
      );
      console.log(response.data.student);
      setStudent(response.data.student);
    } catch (error) {
      console.log(error);
    }
  };
  let formatDate = student.dob;

  let responseDate = moment(formatDate).format("YYYY-MM-DD");
  console.log(responseDate);
  const setudentData = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("enrollmentid", student.enrollmentid);
    data.append("title", student.title);
    data.append("name", student.name);
    data.append("mobileNo", student.mobileNo);
    data.append("father", student.father);
    data.append("dob", responseDate);
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

  useEffect(() => {
    getCurses();
    getOrder();
  }, []);

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
                    student name
                  </li>
                  <div className="applicant_status ms-auto"></div>
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
                    <div className="col-md-12">
                      <div className="editsinput-wrapp">
                        <div className="panel-group">
                          <label className="fw-bold">Enrollment ID: </label>
                          <input
                            type="text"
                            className="editinputform"
                            value={student.enrollmentid}
                            onChange={(e) =>
                              setStudent({
                                ...student,
                                enrollmentid: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Name of Candidate: </label>
                          <input
                            type="text"
                            className="editinputform"
                            value={student.name}
                            onChange={(e) =>
                              setStudent({ ...student, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Father's Name: </label>
                          <input
                            type="text"
                            className="editinputform"
                            value={student.father}
                            onChange={(e) =>
                              setStudent({ ...student, father: e.target.value })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Address: </label>
                          <input
                            type="text"
                            className="editinputform"
                            value={student.address}
                            onChange={(e) =>
                              setStudent({
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
                            className="editinputform"
                            value={student.education}
                            onChange={(e) =>
                              setStudent({
                                ...student,
                                education: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Experience:</label>
                          <input
                            type="text"
                            className="editinputform"
                            value={student.experience}
                            onChange={(e) =>
                              setStudent({
                                ...student,
                                experience: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold" htmlFor="dob">
                          Date of Birth:{" "}
                        </label>

                        <input
                          className="datebirth"
                          type="date"
                          value={moment(student.dob).format("YYYY-MM-DD")}
                          onChange={(e) =>
                            setStudent({
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
                          className="datebirth"
                          value={student.age}
                          onChange={(e) =>
                            setStudent({
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
                            value={student.gender}
                            onChange={(e) =>
                              setStudent({
                                ...student,
                                gender: e.target.value,
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Blood Group: </label>
                        <input
                          type="text"
                          className="datebirth"
                          value={student.bloodgroup}
                          onChange={(e) =>
                            setStudent({
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
                          value={student.mobileNo}
                          onChange={(e) =>
                            setStudent({
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
                          value={student.email}
                          onChange={(e) =>
                            setStudent({
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
                          <Multiselect
                            showCheckbox
                            className="inputbg-wrap mx-3"
                            isObject={false}
                            onSelect={handleOnchange}
                            options={course}
                            defaultValue={student.courseintrest}
                            selectedValues={student.courseintrest}
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
                          value={student.anyothers}
                          onChange={(e) =>
                            setStudent({
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
                          className="selectoption"
                          required
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              status: e.target.value,
                            })
                          }
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
                          value={student.totalcoursefees}
                          onChange={(e) =>
                            setStudent({
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
                        <input type="text" className="selectoption" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="panel-group">
                        <label className="fw-bold">Fee Schedule : </label>
                        <input
                          type="text"
                          className="selectoption"
                          value={student.depositedfee}
                          onChange={(e) =>
                            setStudent({
                              ...student,
                              depositedfee: e.target.value,
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
                          value={student.anyotherforoffice}
                          onChange={(e) =>
                            setStudent({
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
                          value={student.batch_starting_time}
                          onChange={(e) =>
                            setStudent({
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
                          value={student.batch_ending_time}
                          onChange={(e) =>
                            setStudent({
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
