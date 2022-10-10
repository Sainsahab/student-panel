import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
const AdBatch = () => {
  const [batchStaringTime, SetbatchStaringTime] = useState("");
  const [batcEndTime, SetbatcEndTime] = useState("");
  const [duration, Setduration] = useState("");
  const [batchStaringdate, SetbatchStaringdate] = useState("");
  const [faculty, Setfaculty] = useState("");
  const [course, Setcourse] = useState("");
  const navigate = useNavigate();

  const BatchAdd = async (e) => {
    e.preventDefault();
    const batch_data = {
      batch_starting_time: batchStaringTime,
      batch_ending_time: batcEndTime,
      batch_starting_date: batchStaringdate,
      faculty: faculty,
      course: course,
      duration: duration,
    };
    console.log(batch_data);
    try {
      const response = await axios.post(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/batch/register",
        batch_data
      );
      console.log(response.data);
      toast.success("Batch add");
      navigate("/batchs");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <Helmet>
        <title>Add Batch Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold"> Add Batch </h4>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <div className="first_row">
                  <div className="panel-heading">
                    <h5>Batch Information </h5>
                  </div>
                </div>
                <form onSubmit={BatchAdd}>
                  <div className="row py-3">
                    <div className="col-md-12">
                      <div
                        className="
          editsinput-wrapp"
                      >
                        <div className="panel-group">
                          <div className="panel-group-wrapp">
                            <label className="fw-bold">Batch Time : </label>
                            <label>
                              start
                              <input
                                type="time"
                                className="mx-3"
                                onChange={(e) =>
                                  SetbatchStaringTime(e.target.value)
                                }
                              />
                            </label>

                            <label>
                              end
                              <input
                                type="time"
                                // type="datetime-local"
                                className="mx-3"
                                onChange={(e) => SetbatcEndTime(e.target.value)}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Batch Start Date : </label>
                          <input
                            type="Date"
                            className="editinputform"
                            onChange={(e) =>
                              SetbatchStaringdate(e.target.value)
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Faculty : </label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => Setfaculty(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Course :</label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => Setcourse(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold"> Duration : </label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => Setduration(e.target.value)}
                          />
                        </div>
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

export default AdBatch;
