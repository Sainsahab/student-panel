import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import AddStudent from "../component/form/AddStudent";
const EnquiryForm = () => {
  return (
    <>
      <Helmet>
        <title>Quiries - infonic Query Management System</title>
      </Helmet>
      <div className="container p-4   ">
        <div className="studentEnquiry-wrapper">
          <div className="formbg-wrapper">
            <div className="row">
              <h3 className="hading"> Add Student </h3>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <AddStudent />
              </div>
            </div>
          </div>
          <div className="enquireside-bar">
            <div>
              <img src="/logo.png" alt="#" className="add-studentlogo" />
              <h2 className="animated-paragraph infonic-paragraph" Welcome back>
                Infonic Training & Development Center
              </h2>
              <Link to="/dashbord">
                <button className="btn animated-paragraph infonic-students">
                  Student List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
