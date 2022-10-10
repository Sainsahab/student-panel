import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AddFaculty = () => {
  const [name, SetName] = useState("");
  const [address, SetAddrass] = useState("");
  const [skills, SetSkills] = useState("");
  const [experience, SetExperience] = useState("");
  const [education, SetEducation] = useState("");
  const [dob, SetDob] = useState("");
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [batchstart_time, SetBatchstartTime] = useState("");
  const [batchend_time, SetBatchEndTime] = useState("");
  const [Joined_date, SetJoined_Date] = useState("");
  // const [mobileNo, SetMobilenum] = useState("");
  const [mobileNo, SetMobilenum] = useState("");
  const [emailID, SetEmailID] = useState("");
  const [facebook_Link, SetFacebook_link] = useState("");
  const [github_Link, SetGithub_link] = useState("");
  const [linkedin_Link, Setlinkedin_link] = useState("");
  const [twitter_Link, SetTwitter_link] = useState("");
  const [website_Link, SetWebsite_link] = useState("");
  const [any_others, Setany_others] = useState("");
  const [about, Setabout] = useState("");
  const navigate = useNavigate();
  console.log(mobileNo);
  const FacultyAdd = async (e) => {
    e.preventDefault();
    const Faculty_data = {
      name: name,
      address: address,
      skills: skills,
      experience: experience,
      education_qualification: education,
      dob: dob,
      age: age,
      gender: gender,
      batch_starting_time: batchstart_time,
      batch_ending_time: batchend_time,
      joined_date: Joined_date,
      mobile_no: mobileNo,
      email: emailID,
      fb_link: facebook_Link,
      git_link: github_Link,
      linkedin_link: linkedin_Link,
      twitter_link: twitter_Link,
      website_link: website_Link,
      any_others: any_others,
      about: about,
    };
    console.log(Faculty_data);
    try {
      const response = await axios.post(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/faculty/register",
        Faculty_data
      );
      console.log(response.data);
      toast.success("Faculty add");
      navigate("/all-faculty");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Add Faculty Infonic Query Management System</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold"> Add Faculty </h4>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <div className="first_row">
                  <div className="panel-heading">
                    <h5>Faculty Information </h5>
                  </div>
                </div>

                <form action="" onSubmit={FacultyAdd}>
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
                            className="editinputform"
                            onChange={(e) => SetName(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Address: </label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => SetAddrass(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Skills:</label>
                          <input
                            type="text"
                            onChange={(e) => SetSkills(e.target.value)}
                            className="editinputform"
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Experience:</label>
                          <input
                            type="text"
                            onChange={(e) => SetExperience(e.target.value)}
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
                            onChange={(e) => SetEducation(e.target.value)}
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
                          onChange={(e) => SetDob(e.target.value)}
                          className=" datebirth"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">age: </label>
                        <input
                          type="text"
                          onChange={(e) => SetAge(e.target.value)}
                          className="datebirth"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <select
                        onChange={(e) => SetGender(e.target.value)}
                        className="form-control  inputbg-wrap"
                        required
                      >
                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="batchTime col-md-4">
                      <div className="panel-group-wrapp">
                        <label className="fw-bold">Batch Time: </label>
                        <label>
                          <input
                            type="time"
                            onChange={(e) => SetBatchstartTime(e.target.value)}
                            className="mx-3"
                          />
                        </label>

                        <span>-</span>

                        <label>
                          <input
                            type="time"
                            onChange={(e) => SetBatchEndTime(e.target.value)}
                            className="mx-3"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="panel-group-wrapp">
                        <label className="fw-bold">Joined Date: </label>
                        <input
                          type="date"
                          onChange={(e) => SetJoined_Date(e.target.value)}
                          className="datebirth ms-1"
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
                          placeholder="Mobile  No"
                          onChange={(e) => SetMobilenum(e.target.value)}
                          className="datebirth"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel-group">
                        <label className="fw-bold">Email ID: </label>
                        <input
                          type="email"
                          onChange={(e) => SetEmailID(e.target.value)}
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
                          onChange={(e) => SetFacebook_link(e.target.value)}
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
                          onChange={(e) => SetGithub_link(e.target.value)}
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
                          onChange={(e) => Setlinkedin_link(e.target.value)}
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
                          onChange={(e) => SetTwitter_link(e.target.value)}
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
                          onChange={(e) => SetWebsite_link(e.target.value)}
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
                          onChange={(e) => Setany_others(e.target.value)}
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
                          onChange={(e) => Setabout(e.target.value)}
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

export default AddFaculty;
