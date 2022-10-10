import React, { useState } from "react";

import Student from "../component/allstudentdata/Student.json";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";

const LastMonthLead = () => {
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [studentData, SetstudentData] = useState([]);
  console.log(studentData);
  const lastmonthdata = async (e) => {
    e.preventDefault();
    const lastmonthdata = {
      startdate: startdate,
      enddate: enddate,
    };
    console.log(lastmonthdata);
    try {
      const response = await axios.post(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/student/monthalyquery",
        lastmonthdata
      );
      // SetstudentData(response.data.newchatorderid);
      SetstudentData(response.data.sudentslist);
      console.log(response.data.sudentslist);
      toast.success("Student List");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Last Month Lead Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <diV className="container">
        <form onSubmit={lastmonthdata}>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="panel-group">
                <label className="fw-bold">Start Date: </label>
                <input
                  type="date"
                  placeholder="start-date"
                  onChange={(e) => setStartdate(e.target.value)}
                  className="datebirth"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="panel-group">
                <label className="fw-bold">End Date: </label>
                <input
                  type="date"
                  placeholder="start-date"
                  className="datebirth"
                  onChange={(e) => setEnddate(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-4">
              <button
                type="submit"
                className="form-control  btn btn-primary submit-btn"
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="row py-5">
          <div className="col-md-12">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col" className="actionColumn">
                      course
                    </th>

                    <th scope="col">Email Id</th>
                    <th scope="col">status &nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((item, index) => {
                    return (
                      <>
                        {item.students.map((item) => {
                          return (
                            <>
                              <tr key={index}>
                                <td
                                  id="profileColumn"
                                  className="profileColumn"
                                >
                                  <div className="profile_and_premium">
                                    <div className="text">
                                      <Link href="">{item.name}</Link>
                                    </div>
                                  </div>
                                </td>
                                <td className="status statusColumn">
                                  {item.mobileNo}
                                </td>
                                <td className="applicationcountColumn">
                                  {item.courseintrest}
                                </td>

                                <td className="sharenode">
                                  <a href="mailto:parkash@gmail.com">
                                    {item.email}
                                  </a>
                                </td>

                                <td className="status statusColumn">
                                  <span className="badge badge-pill draft">
                                    {item.status}
                                  </span>
                                </td>
                              </tr>
                            </>
                          );
                        })}{" "}
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </diV>
      <Footer />
    </>
  );
};

export default LastMonthLead;
