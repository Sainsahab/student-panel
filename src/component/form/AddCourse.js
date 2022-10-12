import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const AddCourse = () => {
  const [title, SetTitle] = useState("");
  const [fees, Setfees] = useState("");
  const [duration, Setduration] = useState("");
  const [discription, Setdiscription] = useState("");
  const [file, Setfile] = useState([]);

  const navigate = useNavigate();

  console.log(file);

  const CoursesAdd = async (e) => {
    e.preventDefault();

    const dataArray = new FormData();
    dataArray.append("title", title);
    dataArray.append("fees", fees);
    dataArray.append("duration", duration);
    dataArray.append("discription", discription);
    // dataArray.append("file", file);
    for (let i = 0; i < file.length; i++) {
      dataArray.append("file", file[i]);
    }

    console.log(dataArray);

    try {
      const response = await axios.post(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/course/register",
        dataArray
      );
      console.log(response.data);
      toast.success("Course add");
      navigate("/all-courses");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Course Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <div>
        <div className="container-fluid">
          <div className="max-width-container application-container mx-auto mt-3">
            <h4 className="fw-bold"> Add Course </h4>

            <div id="assesment-container" className="mt-4">
              <div className="application_cover-letter">
                <form onSubmit={CoursesAdd}>
                  <div className="row py-3">
                    <div className="col-md-12">
                      <div
                        className="
        editsinput-wrapp"
                      >
                        <div className="panel-group">
                          <label className="fw-bold">Title : </label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => SetTitle(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Fees : </label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => Setfees(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Duration:</label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => Setduration(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold">Discription:</label>
                          <input
                            type="text"
                            className="editinputform"
                            onChange={(e) => Setdiscription(e.target.value)}
                          />
                        </div>
                        <div className="panel-group">
                          <label className="fw-bold"> Course Pdf: </label>
                          <input
                            type="file"
                            className="pdf-file"
                            onChange={(e) => Setfile(e.target.files)}
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

export default AddCourse;
