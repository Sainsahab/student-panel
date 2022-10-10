import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
const EditBatch = () => {
  // const [batchStaringTime, SetbatchStaringTime] = useState("");
  // const [batcEndTime, SetbatcEndTime] = useState("");
  // const [duration, Setduration] = useState("");
  // const [batchStaringdate, SetbatchStaringdate] = useState("");
  // const [faculty, Setfaculty] = useState("");
  // const [course, Setcourse] = useState("");
  const [batchData, SetbatchData] = useState([]);
  const navigate = useNavigate();
  const { _id } = useParams();
  console.log(batchData);
  const getBatchData = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/batch/${_id}`
      );
      SetbatchData(response?.data?.batch);
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBatchData();
  }, []);

  const BatchEdit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("batch_starting_time", batchData.batch_starting_time);
    data.append("batch_ending_time", batchData.batch_ending_time);
    data.append("batch_starting_date", batchData.batch_starting_date);
    data.append("faculty", batchData.faculty);
    data.append("course", batchData.course);
    data.append("duration", batchData.duration);

    console.log(data);
    console.log(batchData.batch_starting_time);
    try {
      await axios.patch(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/batch/edit/${_id}`,
        data
      );
      navigate("/batchs");
      toast.success("Batch  Edited Successfully ");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Edit Batch Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold"> Edit Batch </h4>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <div className="first_row">
                  <div className="panel-heading">
                    <h5>Batch Information </h5>
                  </div>
                </div>
                <form onSubmit={BatchEdit}>
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
                                // type="date"
                                className="mx-3"
                                defaultValue={batchData.batch_starting_time}
                                onChange={(e) =>
                                  SetbatchData({
                                    ...batchData,
                                    batch_starting_time: e.target.value,
                                  })
                                }
                              />
                            </label>

                            <label>
                              end
                              <input
                                // type="datetime-local"
                                type="time"
                                className="mx-3"
                                onChange={(e) =>
                                  SetbatchData({
                                    ...batchData,
                                    batch_ending_time: e.target.value,
                                  })
                                }
                                defaultValue={batchData.batch_ending_time}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Batch Start Date : </label>
                          <input
                            type="Date"
                            className="editinputform"
                            value={batchData.batch_starting_date}
                            onChange={(e) =>
                              SetbatchData({
                                ...batchData,
                                batch_starting_date: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Faculty : </label>
                          <input
                            type="text"
                            className="editinputform"
                            defaultValue={batchData.faculty}
                            onChange={(e) =>
                              SetbatchData({
                                ...batchData,
                                faculty: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Course :</label>
                          <input
                            type="text"
                            defaultValue={batchData.course}
                            className="editinputform"
                            onChange={(e) =>
                              SetbatchData({
                                ...batchData,
                                course: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold"> Duration : </label>
                          <input
                            defaultValue={batchData.duration}
                            type="text"
                            className="editinputform"
                            onChange={(e) =>
                              SetbatchData({
                                ...batchData,
                                duration: e.target.value,
                              })
                            }
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

export default EditBatch;
