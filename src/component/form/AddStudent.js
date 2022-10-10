import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import MultiSelect from "react-multiple-select-dropdown-lite";
import intrestedcourse from "./Intrestedcourse.json";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const AddStudent = () => {
  const [title, SetTitle] = useState("");
  const [name, SetName] = useState("");
  const [father, SetFatherName] = useState("");
  const [mobileNo, SetMobilenum] = useState("");
  const [gender, SetGender] = useState("");
  const [courseintrest, SetCourses] = useState([]);
  const [dob, SetDob] = useState("");
  const [email, SetEmail] = useState("");
  const [education, SetStudy] = useState("");
  const [source, SetSource] = useState("");
  const [other, SetOther] = useState("");
  console.log(courseintrest);
  // const courses = [];
  // console.log(courses);
  // const getCoure = () => {
  //   courses.push(courseintrest);
  // };

  const [course, SetsCourses] = useState();
  const navigate = useNavigate();

  const handleOnchange = (val) => {
    SetCourses(val);
  };

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

  useEffect(() => {
    getCurses();
  }, []);

  const StudentAdd = async (e) => {
    e.preventDefault();

    const data_items = {
      title: title,
      name: name,
      father: father,
      mobileNo: mobileNo,
      gender: gender,
      dob: dob,
      email: email,
      education: education,
      courseintrest: courseintrest,
      source: source,
      other: other,
    };

    try {
      const response = await axios.post(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/student/register",
        data_items
      );
      console.log(response.data);
      toast.success("Student add");
      navigate("/all-students-list");
      // window.location.reload(false);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={StudentAdd}>
          <div>
            <div className=" mb-3">
              <div className="row">
                <div className="col-md-3">
                  <input
                    type="text"
                    placeholder="Title"
                    className="form-control  inputbg-wrap"
                    required
                    onChange={(e) => SetTitle(e.target.value)}
                  />
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control  inputbg-wrap"
                    placeholder="Name of candidate"
                    required
                    onChange={(e) => SetName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-3">
              <input
                type="text"
                placeholder="Father Name"
                className="form-control  inputbg-wrap"
                required
                onChange={(e) => SetFatherName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="number"
                    placeholder="Mobile  No"
                    className="form-control  inputbg-wrap"
                    required
                    onChange={(e) => SetMobilenum(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-outline ">
                    {/* <select
                      className="form-control  inputbg-wrap"
                      required
                      onChange={(e) => {
                        SetCourses(e.target.value);
                      }}
                    ></select> 
                   
                    <select
                      name="courses"
                      multiple
                      onChange={(e) => {
                        SetCourses((d) => [...d, e.target.value]);
                        console.log(e.target.value);
                      }}
                    >
                      {course.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select> */}
                    <label className="courselabal-wrapp">Course:</label>
                    {/* <Multiselect
                      showCheckbox
                      className=" inputbg-wrap"
                      required
                      // placeholder="Courses"
                      isObject={false}
                      onSelect={SetCourses}
                      options={course}
                      selectedValues={course.selectedValue}
                      displayValue="name"
                      onRemove={SetCourses}
                    />
                    */}
                    <MultiSelect options={course} onChange={handleOnchange} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="date"
                    className="form-control  inputbg-wrap"
                    required
                    onChange={(e) => SetDob(e.target.value)}
                  />
                </div>
                <div className="col-sm-6">
                  <select
                    className="form-control  inputbg-wrap"
                    required
                    onChange={(e) => SetGender(e.target.value)}
                  >
                    <option>Gender</option>
                    <option value=" Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-outline mb-3">
              <input
                type="email"
                className="form-control  inputbg-wrap"
                placeholder="Email ID"
                required
                onChange={(e) => SetEmail(e.target.value)}
              />
            </div>
            <div className="form-outline mb-3">
              <input
                placeholder="Educatonal Qualification"
                type="text"
                className="form-control  inputbg-wrap"
                required
                onChange={(e) => SetStudy(e.target.value)}
              />
            </div>
            <div className="form-outline mb-3">
              <div className="form-outline col-12">
                <select
                  className="form-control  inputbg-wrap"
                  required
                  onChange={(e) => SetSource(e.target.value)}
                >
                  <option>Source</option>
                  <option value="Direct">Direct</option>
                  <option value="just dail">just dail</option>
                  <optionv value="Online">Online</optionv>
                  <option value="Referral">Referral </option>
                  <option value="other">other</option>
                </select>
              </div>
            </div>
            <div className="form-outline mb-3">
              <textarea
                onChange={(e) => SetOther(e.target.value)}
                rows="4"
                cols="5"
                className="form-control  inputbg-wrap"
                placeholder="Other"
              ></textarea>
            </div>{" "}
            <div className="form-outline mb-0">
              <button
                type="submit"
                className="form-control  btn btn-primary submit-btn"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
