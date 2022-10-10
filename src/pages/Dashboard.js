import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import Student from "../component/allstudentdata/Student.json";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashbord Infonic Query Management System</title>
      </Helmet>
      <Navbar />
      <div className="dashbordpage-bg">
        <div className="container">
          <h2 className="dashbordpage-heading">
            Welcome To Infonic Training & Development Center
          </h2>

          <div className="dashbord-cardtab-wrapp">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                <Link to="/all-students-list">
                  {" "}
                  <div className="dashbord-card-wrappr Studentcard-wrapp">
                    All Student
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                <Link to="/all-courses">
                  {" "}
                  <div className="dashbord-card-wrappr AllCoursecardbg">
                    All Course
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                <Link to="/all-faculty">
                  <div className="dashbord-card-wrappr facultycardbg">
                    All Faculty
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                <Link to="/batchs">
                  {" "}
                  <div className="dashbord-card-wrappr allbatchcardbg">
                    All Batch
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                <Link to="/this-month-lead">
                  {" "}
                  <div className="dashbord-card-wrappr lastcardbg">
                    This Month Leads
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 my-3">
                <Link to="/coming-soon">
                  <div className="dashbord-card-wrappr fesscardbg">
                    Fees Structure
                  </div>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
