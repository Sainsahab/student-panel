import React, { useEffect, useState } from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import Test from "../component/learn/Test";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Axios from "axios";
const AllStudent = () => {
  return (
    <>
      <Helmet>
        <title> All Students Infonic Query Management System</title>
      </Helmet>
      <Navbar />
      <div>
        <div className="container-fluid ">
          <div className="max-width-container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mt-3"></ol>
              <div className="top-container  mb-4">
                <div className="title m-auto">
                  <h4 className="fw-bolder text-center">All Students</h4>
                </div>
              </div>
            </nav>
            <div className="border-bottom mb-3"></div>

            <div className="flex-container row">
              <div className="col-md-2 bg-light">
                <div className="navigation_outercontainer ">
                  <h5 className="fw-bold p-2">
                    {" "}
                    Sort By{" "}
                    <span className="material-symbols-outlined">sort</span>
                  </h5>
                  <div className="d-flex flex-sm-column flex-row flex-nowrap ">
                    <div className="toggle_internship mb-2 ">
                      <ul
                        className="nav nav-pills "
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            Stage
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            Time
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show  px-2"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <ul className="nav nav-pills nav-flush flex-sm-column flex-roe  mb-auto mx-auto ">
                          <li>
                            <a
                              href="#"
                              className="nav-link active py-1 px-1 m-1"
                              title=""
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-original-title="Dashboard"
                            >
                              New Students
                            </a>
                          </li>

                          <li>
                            <a
                              href="#"
                              className="nav-link py-1 px-2 m-1"
                              title=""
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-original-title="Products"
                            >
                              Awaiting & Unpaid
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="nav-link py-1 px-2 m-1"
                              title=""
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-original-title="Customers"
                            >
                              Unpaid & Unassigned
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-pane fade show  px-2"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <ul className="nav nav-pills nav-flush flex-sm-column flex-roe  mb-auto mx-auto ">
                          <div className="nav-border-bottom mb-3"></div>

                          <li>
                            <a
                              href="#"
                              className="nav-link py-1 px-2 m-1"
                              title=""
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-original-title="Orders"
                            >
                              <span className="material-symbols-outlined">
                                list_alt
                              </span>{" "}
                              Today's Order
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="nav-link py-1 m-1 px-2"
                              title=""
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-original-title="Orders"
                            >
                              <span className="material-symbols-outlined">
                                timer
                              </span>{" "}
                              Today's Deadline
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="application-container">
                  <div className="application-top-box">
                    {/*   <div className="application_top_inner_container">
                      <h5 className="fw-bold mb-4">Showing 21 results</h5>
                    </div>*/}

                    <div className="inner_container">
                      <div className="inner">
                        <div className="individual_application p-1">
                          <div className="col-md-12">
                            <div className="table">
                              <div className="table-wrappr">
                                <table>
                                  <thead>
                                    <tr>
                                      <th scope="col">Name</th>
                                      <th scope="col">Phone No</th>
                                      <th scope="col" className="actionColumn">
                                        course
                                      </th>

                                      <th scope="col">Edit &nbsp;</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td
                                        id="profileColumn"
                                        className="profileColumn"
                                      >
                                        <div className="profile_and_premium">
                                          <div className="text">
                                            <Link to="/Student-view">
                                              Parkash
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="status statusColumn">
                                        1234567891
                                      </td>
                                      <td className="applicationcountColumn">
                                        {" "}
                                        paython
                                      </td>

                                      <td className="optionsColumn">
                                        <Link
                                          to="/Student-view"
                                          className="mx-2"
                                        >
                                          <i className="fa-regular fa-eye"></i>
                                        </Link>
                                        <Link to="/student-details">
                                          <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="row ">
                                <nav className="mt-3">
                                  <ul className="pagination justify-content-center">
                                    <li className="page-item">
                                      <a
                                        className="page-link"
                                        href="#"
                                        aria-label="Previous"
                                      >
                                        <span aria-hidden="true">&laquo;</span>
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        1
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        2
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a className="page-link" href="#">
                                        3
                                      </a>
                                    </li>
                                    <li className="page-item">
                                      <a
                                        className="page-link"
                                        href="#"
                                        aria-label="Next"
                                      >
                                        <span aria-hidden="true">&raquo;</span>
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 filter-container ">
                <div className="filter-outer-container bg-light px-2">
                  <div id="filters">
                    <div className="filter-elements-container p-2">
                      <h5 className=" title fw-bold">
                        Search By &nbsp;
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </h5>

                      <form className="mt-3">
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
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            for="graduation_year-filter"
                            className="form-label"
                          >
                            Courses
                          </label>

                          <select
                            className="form-select"
                            aria-label="Default select example"
                            placeholder="e.g. 2021"
                          >
                            <option value="1">Seo</option>
                            <option value="2">C++</option>
                            <option value="3">HTML:5</option>
                            <option value="3">jAVA</option>
                            <option value="3">Full Stack</option>
                            <option value="3">Online Markting</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="skills-filter" className="form-label">
                            Mobile No :
                          </label>
                          <div
                            className="input-group date "
                            placeholder="deadline"
                          >
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Mobile No"
                            />
                          </div>
                        </div>

                        <div className="switch_button-filters mt-4"></div>
                        <div className="filter-buttons mt-5">
                          <button
                            role="button"
                            className="btn clear_all-btn ms-2 "
                          >
                            Clear all
                          </button>
                          <button
                            role="button"
                            className="bt show_results-btn p-1 px-2 ms-3 fw-bold"
                          >
                            Show Results
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-container-mobile fixed-bottom ">
              <div id="application-tab">
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i className="fa-solid fa-arrow-down-wide-short"></i> Sort By
                </button>

                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Sort By</h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div className="toggle_internship mb-2 ">
                    <ul
                      className="nav nav-pills "
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-stage-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-stage"
                          type="button"
                          role="tab"
                          aria-controls="pills-stage"
                          aria-selected="true"
                        >
                          Stage
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-time-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-time"
                          type="button"
                          role="tab"
                          aria-controls="pills-time"
                          aria-selected="false"
                        >
                          Time
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active px-2"
                      id="pills-stage"
                      role="tabpanel"
                      aria-labelledby="pills-stage-tab"
                    >
                      <ul className="nav nav-pills nav-flush flex-sm-column flex-roe  mb-auto mx-auto ">
                        <div className="nav-border-bottom mb-3"></div>

                        <li>
                          <a
                            href="#"
                            className="nav-link active py-1 px-1 m-1"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Dashboard"
                          >
                            <span className="material-symbols-outlined">
                              new_releases
                            </span>{" "}
                            New Orders
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane fade show  px-2"
                      id="pills-time"
                      role="tabpanel"
                      aria-labelledby="pills-time-tab"
                    >
                      <ul className="nav nav-pills nav-flush flex-sm-column flex-roe  mb-auto mx-auto ">
                        <div className="nav-border-bottom mb-3"></div>

                        <li>
                          <a
                            href="#"
                            className="nav-link py-1 px-2 m-1"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Orders"
                          >
                            <span className="material-symbols-outlined">
                              list_alt
                            </span>{" "}
                            Today's Order
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="nav-link py-1 m-1 px-2"
                            title=""
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            data-bs-original-title="Orders"
                          >
                            <span className="material-symbols-outlined">
                              timer
                            </span>{" "}
                            Today's Deadline
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="filters-tab">
                <button
                  className="btn  float-end"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>

                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div id="filters">
                    <div className="filter-elements-container p-2">
                      <h5 className=" title fw-bold d-flex">
                        Search By &nbsp;
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <button
                          type="button"
                          className="btn-close text-reset ms-auto"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </h5>

                      <form className="mt-3">
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
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            for="graduation_year-filter"
                            className="form-label"
                          >
                            Courses
                          </label>

                          <select
                            className="form-select"
                            aria-label="Default select example"
                            placeholder="e.g. 2021"
                          >
                            <option value="1">Seo</option>
                            <option value="2">C++</option>
                            <option value="3">HTML:5</option>
                            <option value="3">jAVA</option>
                            <option value="3">Full Stack</option>
                            <option value="3">Online Markting</option>
                          </select>
                        </div>

                        <div className="mb-3">
                          <label for="skills-filter" className="form-label">
                            Mobile No :
                          </label>
                          <div
                            className="input-group date "
                            placeholder="deadline"
                          >
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Mobile No"
                            />
                          </div>
                        </div>

                        <div className="switch_button-filters mt-4"></div>
                        <div className="filter-buttons mt-5">
                          <button
                            role="button"
                            className="btn clear_all-btn ms-2 "
                          >
                            Clear all
                          </button>
                          <button
                            role="button"
                            className="bt show_results-btn p-1 px-2 ms-3 fw-bold"
                          >
                            Show Results
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllStudent;
