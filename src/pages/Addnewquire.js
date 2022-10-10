import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import { Link } from "react-router-dom";
import AddStudent from "../component/form/AddStudent";
import { Helmet } from "react-helmet";

const Addnewquire = () => {
  return (
    <>
      <Helmet>
        <title> New Enquiry Infonic Query Management System</title>
      </Helmet>
      <Navbar />

      <h2 className="page-hading">Add new Enquiry Form</h2>
      <section>
        <div className="container pt-3 pb-3 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-6 d-none d-md-block">
                    <img
                      src="./img/book.jpg"
                      alt="#"
                      className="studentside-formimg"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6  align-items-center">
                    <div className="add-studentform-wrappr">
                      <AddStudent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Addnewquire;
