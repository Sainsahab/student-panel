import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const FacultyDetails = () => {
  const [FacutyData, SetFacultyData] = useState([]);
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log(FacutyData);

  const getFacultyData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/faculty/${_id}`
      );
      SetFacultyData(response.data.faculty);
      console.log(response.data.faculty);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const FacyltyEdit = async (e) => {
    e.preventDefault();

    const Faculty_data = {
      name: FacutyData.name,
      address: FacutyData.address,
      skills: FacutyData.skills,
      experience: FacutyData.experience,
      education_qualification: FacutyData.education_qualification,
      dob: FacutyData.dob,
      age: FacutyData.age,
      gender: FacutyData.gender,
      batch_starting_time: FacutyData.batch_staritng_time,
      batch_ending_time: FacutyData.batch_ending_time,
      joined_date: FacutyData.joined_date,
      mobile_no: FacutyData.mobile_no,
      email: FacutyData.email,
      fb_link: FacutyData.fb_link,
      git_link: FacutyData.git_link,
      linkedin_link: FacutyData.linkedin_link,
      twitter_link: FacutyData.twitter_link,
      website_link: FacutyData.website_link,
      any_others: FacutyData.any_others,
      about: FacutyData.about,
    };

    console.log(FacutyData);
    try {
      await axios.patch(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/faculty/edit/${_id}`,
        Faculty_data
      );
      navigate("/all-faculty");
      toast.success("Faculty  Edited Successfully ");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getFacultyData();
  }, []);
  return (
    <>
      <Helmet>
        <title>Edit Faculty Form Infonic Query Management System</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold"> Edit Faculty Form </h4>
            <div className="breadcrumb-container details-container">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {FacutyData.name}
                  </li>
                  <div className="applicant_status ms-auto">joined</div>
                </ol>
              </nav>
            </div>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <div className="first_row">
                  <div className="panel-heading">
                    <h5>Faculty Information </h5>
                  </div>
                </div>
                <form onSubmit={FacyltyEdit}>
                  <div className="row py-3">
                    <div className="col-md-8">
                      <div
                        className="
          editsinput-wrapp"
                      >
                        <div className="panel-group">
                          <label className="fw-bold">Name : </label>
                          <input
                            type="text"
                            Value={FacutyData.name}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                name: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Address: </label>
                          <input
                            type="text"
                            Value={FacutyData.address}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                address: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Skills:</label>
                          <input
                            type="text"
                            Value={FacutyData.skills}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                skills: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Experience:</label>
                          <input
                            type="text"
                            Value={FacutyData.experience}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                experience: e.target.value,
                              })
                            }
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">
                            {" "}
                            EDU. Qualification:{" "}
                          </label>
                          <input
                            type="text"
                            Value={FacutyData.education_qualification}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                educaeducation_qualificationtion:
                                  e.target.value,
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
                          Value={FacutyData.dob}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              dob: e.target.value,
                            })
                          }
                          className=" datebirth"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">age: </label>
                        <input
                          type="text"
                          Value={FacutyData.age}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              age: e.target.value,
                            })
                          }
                          className="datebirth"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <select
                        onChange={(e) =>
                          SetFacultyData({
                            ...FacutyData,
                            gender: e.target.value,
                          })
                        }
                        className="form-control  inputbg-wrap"
                        required
                      >
                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Female">Other</option>
                      </select>
                    </div>
                    <div className="batchTime col-md-4">
                      <div className="panel-group-wrapp">
                        <label className="fw-bold">Batch Time: </label>
                        <label>
                          <input
                            type="time"
                            value={FacutyData.batch_staritng_time}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                batch_staritng_time: e.target.value,
                              })
                            }
                            className="mx-3"
                          />
                        </label>

                        <span>-</span>

                        <label>
                          <input
                            type="time"
                            value={FacutyData.batch_ending_time}
                            onChange={(e) =>
                              SetFacultyData({
                                ...FacutyData,
                                batch_ending_time: e.target.value,
                              })
                            }
                            className="mx-3"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="panel-group">
                        <label className="fw-bold">Joined Date: </label>
                        <input
                          type="date"
                          value={FacutyData.joined_date}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              joined_date: e.target.value,
                            })
                          }
                          className="datebirth"
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
                          value={FacutyData.mobile_no}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              mobile_no: e.target.value,
                            })
                          }
                          className="datebirth"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Email ID: </label>
                        <input
                          type="email"
                          value={FacutyData.email}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              email: e.target.value,
                            })
                          }
                          className="datebirth"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">facebook: </label>
                        <input
                          type="link"
                          value={FacutyData.fb_link}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              fb_link: e.target.value,
                            })
                          }
                          className="selectoption"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">Github : </label>
                        <input
                          type="link"
                          value={FacutyData.git_link}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              git_link: e.target.value,
                            })
                          }
                          className="selectoption"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">linkedin : </label>
                        <input
                          type="link"
                          value={FacutyData.linkedin_link}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              linkedin_link: e.target.value,
                            })
                          }
                          className="selectoption"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">twitter : </label>
                        <input
                          type="link"
                          value={FacutyData.twitter_link}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              twitter_link: e.target.value,
                            })
                          }
                          className="selectoption"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">website : </label>
                        <input
                          type="link"
                          value={FacutyData.twitter_link}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              twitter_link: e.target.value,
                            })
                          }
                          className="selectoption"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="panel-group">
                        <label className="fw-bold">Any Others: </label>
                        <input
                          type="text"
                          value={FacutyData.any_others}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              any_others: e.target.value,
                            })
                          }
                          className="selectoption"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="">
                        <label className="fw-bold mb-2">About : </label>
                        <textarea
                          value={FacutyData.about}
                          onChange={(e) =>
                            SetFacultyData({
                              ...FacutyData,
                              about: e.target.value,
                            })
                          }
                          className="w-100"
                          rows={5}
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

export default FacultyDetails;
