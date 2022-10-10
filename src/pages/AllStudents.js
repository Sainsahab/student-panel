import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { toast } from "react-toastify";

import MultiSelect from "react-multiple-select-dropdown-lite";

const AllStudents = () => {
  const [student, SetStudent] = useState([]);
  const [course, SetsCourses] = useState([]);
  const [currentPagenation, setcurrentPagenation] = useState("");
  const [page, setPage] = useState(1);

  const [mobileno, SetMobileNo] = useState("");
  const [studentName, SetstudentName] = useState("");
  const [courseintrest, Setcourseintrest] = useState("java");

  console.log(mobileno);
  console.log(studentName);
  console.log(courseintrest);
  console.log(student);
  // course Api

  const handleOnchange = (val) => {
    Setcourseintrest(val);
  };

  const clearstudent = () => {
    SetMobileNo(null);
    SetstudentName(null);
    Setcourseintrest(null);

    // document.getElementById("myForm").reset();
  };
  const getCurses = async () => {
    try {
      const response = await axios.get(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/course/all"
      );
      // SetsCourses(response.data.course);
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

  // course Api

  // console.log(student);
  const getStudent = async () => {
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/all/?${
          "&page=" + page
        }`
      );
      SetStudent(response.data.students);
      // setcurrentPagenation(response.data);
      setcurrentPagenation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (_id) => {
    try {
      const response = await axios.delete(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/delete/${_id}`
      );
      toast.success("student Delete");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Filter api

  const getStudents = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://lionfish-app-hbj76.ondigitalocean.app/api/student/search?${
          studentName ? "name=" + studentName : ""
        }${courseintrest ? "&courseintrest=" + courseintrest : ""}${
          mobileno ? "&mobileno=" + mobileno : ""
        }`
      );
      SetStudent(response.data.student);
      toast.success("Fillter Done");
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getStudent();
    getStudents();
  }, [page]);

  return (
    <>
      <Helmet>
        <title> All Students Infonic Query Management System</title>
      </Helmet>

      <Navbar />
      <div>
        <div className="container">
          <section id="main-section">
            <div className="user-list container ">
              <div className="responsivetabs ">
                <ul
                  className="nav nav-tabs completed-order justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active fw-bold"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw-bold"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      {" "}
                      Not Interested
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw-bold"
                      id="deadline-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#deadline"
                      type="button"
                      role="tab"
                      aria-controls="deadline"
                      aria-selected="false"
                    >
                      Interested
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link fw-bold"
                      id="Awaiting_Unpaid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Awaiting_Unpaid"
                      type="button"
                      role="tab"
                      aria-controls="Awaiting&Unpaid"
                      aria-selected="false"
                    >
                      Joined
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                      className="nav-link fw-bold"
                    >
                      Filter <i className="fa-solid fa-filter"></i>
                    </button>
                  </li>
                </ul>
                <div className=" tabs_content " id="view1">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="col-md-12">
                        <div className="table table-wrapp">
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
                                <th scope="col">Edit &nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              {student.map((item, index) => {
                                return (
                                  <tr key={index}>
                                    <td
                                      id="profileColumn"
                                      className="profileColumn"
                                    >
                                      <div className="profile_and_premium">
                                        <div className="text">
                                          <Link href="">
                                            <span className="student-nametag">
                                              {item.title}
                                            </span>{" "}
                                            <span className="student-nametag">
                                              {item.name}
                                            </span>
                                          </Link>
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
                                      {" "}
                                      <a href="mailto:parkash@gmail.com">
                                        {item.email}
                                      </a>
                                    </td>

                                    <td className="status statusColumn">
                                      <span className="badge badge-pill draft">
                                        {item.status}
                                      </span>
                                    </td>

                                    <td className="optionsColumn">
                                      <Link
                                        to={"/Student-view/" + item._id}
                                        className="mx-2"
                                      >
                                        <i className="fa-regular fa-eye"></i>
                                      </Link>
                                      <Link to={"/student-details/" + item._id}>
                                        <i className="fa-regular fa-pen-to-square"></i>
                                      </Link>
                                      <span
                                        onClick={() => deleteStudent(item._id)}
                                      >
                                        <i className="fa-solid fa-trash"></i>
                                      </span>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        <ReactPaginate
                          breakLabel="..."
                          nextLabel=">"
                          onPageChange={(e) => setPage(e.selected + 1)}
                          pageRangeDisplayed={currentPagenation.currentPage}
                          pageCount={currentPagenation.totalPages}
                          previousLabel="<"
                          renderOnZeroPageCount={null}
                          className="reactpagination-wrapp"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
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
                                <th scope="col">Edit &nbsp;</th>
                              </tr>
                            </thead>

                            <tbody>
                              {student.map((item, index) => {
                                if (item.status === "Not Interested") {
                                  return (
                                    <tr key={index}>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link href="">
                                              <span className="student-nametag">
                                                {item.title}
                                              </span>{" "}
                                              <span className="student-nametag">
                                                {item.name}
                                              </span>
                                            </Link>
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
                                        {" "}
                                        <a href="mailto:parkash@gmail.com">
                                          {item.email}
                                        </a>
                                      </td>

                                      <td className="status statusColumn">
                                        <span className="badge badge-pill draft">
                                          {item.status}
                                        </span>
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to={"/Student-view/" + item._id}
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link
                                          to={"/student-details/" + item._id}
                                        >
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                        <span
                                          onClick={() =>
                                            deleteStudent(item._id)
                                          }
                                        >
                                          <i className="fa-solid fa-trash"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                          </table>
                          <div className="row ">
                            <ReactPaginate
                              breakLabel="..."
                              nextLabel=">"
                              onPageChange={(e) => setPage(e.selected + 1)}
                              pageRangeDisplayed={currentPagenation.currentPage}
                              pageCount={currentPagenation.totalPages}
                              previousLabel="<"
                              renderOnZeroPageCount={null}
                              className="reactpagination-wrapp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="deadline"
                      role="tabpanel"
                      aria-labelledby="deadline-tab"
                    >
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
                                <th scope="col">Edit &nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              {student.map((item, index) => {
                                if (item.status === "Intrested") {
                                  return (
                                    <tr key={index}>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link href="">
                                              <span className="student-nametag">
                                                {item.title}
                                              </span>{" "}
                                              <span className="student-nametag">
                                                {item.name}
                                              </span>
                                            </Link>
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
                                        {" "}
                                        <a href="mailto:parkash@gmail.com">
                                          {item.email}
                                        </a>
                                      </td>

                                      <td className="status statusColumn">
                                        <span className="badge badge-pill draft">
                                          {item.status}
                                        </span>
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to={"/Student-view/" + item._id}
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link
                                          to={"/student-details/" + item._id}
                                        >
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                        <span
                                          onClick={() =>
                                            deleteStudent(item._id)
                                          }
                                        >
                                          <i className="fa-solid fa-trash"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                          </table>
                          <div className="row ">
                            <ReactPaginate
                              breakLabel="..."
                              nextLabel=">"
                              onPageChange={(e) => setPage(e.selected + 1)}
                              pageRangeDisplayed={currentPagenation.currentPage}
                              pageCount={currentPagenation.totalPages}
                              previousLabel="<"
                              renderOnZeroPageCount={null}
                              className="reactpagination-wrapp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="Awaiting_Unpaid"
                      role="tabpanel"
                      aria-labelledby="Awaiting_Unpaid-tab"
                    >
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
                                <th scope="col">Edit &nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              {student.map((item, index) => {
                                if (item.status === "Joined") {
                                  return (
                                    <tr key={index}>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link href="">
                                              <span className="student-nametag">
                                                {item.title}
                                              </span>{" "}
                                              <span className="student-nametag">
                                                {item.name}
                                              </span>
                                            </Link>
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
                                        {" "}
                                        <a href="mailto:parkash@gmail.com">
                                          {item.email}
                                        </a>
                                      </td>

                                      <td className="status statusColumn">
                                        <span className="badge badge-pill draft">
                                          {item.status}
                                        </span>
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to={"/Student-view/" + item._id}
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link
                                          to={"/student-details/" + item._id}
                                        >
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                        <span
                                          onClick={() =>
                                            deleteStudent(item._id)
                                          }
                                        >
                                          <i className="fa-solid fa-trash"></i>
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                          </table>
                          <div className="row ">
                            <ReactPaginate
                              breakLabel="..."
                              nextLabel=">"
                              onPageChange={(e) => setPage(e.selected + 1)}
                              pageRangeDisplayed={currentPagenation.currentPage}
                              pageCount={currentPagenation.totalPages}
                              previousLabel="<"
                              renderOnZeroPageCount={null}
                              className="reactpagination-wrapp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Filter</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            {" "}
            <form className="mt-3" onSubmit={getStudents} id="myForm">
              <div className="mb-3">
                <label for="background-filter" className="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="background-filter"
                  aria-describedby="emailHelp"
                  placeholder="e.g. #AB39GT"
                  onChange={(e) => {
                    SetstudentName(e.target.value);
                  }}
                  // ref="studentName"
                />
              </div>
              <div className="mb-3">
                <label for="graduation_year-filter" className="form-label">
                  Courses
                </label>

                {/**   <select
                  className="form-select"
                  aria-label="Default select example"
                  placeholder="e.g. 2021"
                  onChange={(e) => {
                    Setcourseintrest(e.target.value);
                  }}
                >
                   {course.map((item, index) => {
                    return (
                      <>
                        <option value={item.title} key={index}>
                          {item.title}
                        </option>
                      </>
                    );
                  })}
                </select>*/}
                <MultiSelect
                  options={course}
                  onChange={handleOnchange}
                  // ref="course"
                />
              </div>

              <div className="mb-3">
                <label for="skills-filter" className="form-label">
                  Mobile No :
                </label>
                <div className="input-group date " placeholder="deadline">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Mobile No"
                    onChange={(e) => {
                      SetMobileNo(e.target.value);
                    }}
                    // ref="studentMobileNo"
                  />
                </div>
              </div>

              <div className="filter-buttons mt-5">
                <button
                  className="btn clear_all-btn ms-2 "
                  onClick={clearstudent}
                  type="reset"
                  value="Reset"
                >
                  Clear all
                </button>
              </div>
              <button
                type="submit"
                className="bt show_results-btn p-1 px-2 ms-3 fw-bold"
              >
                Show Results
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllStudents;
