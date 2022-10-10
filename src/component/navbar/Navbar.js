import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <header className="header sticky-top">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
              <Link to="/dashbord">
                <img className="ps-4" src="/logo.png" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end "
                id="navbarScroll"
              >
                <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll fw-bold ">
                  <li className="nav-item">
                    <Link
                      className="nav-link  fw-bold"
                      aria-current="page"
                      to="/dashbord"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link  fw-bold"
                      aria-current="page"
                      to="/all-students-list"
                    >
                      All Student
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link  dropdown-toggle"
                      href="#"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Links
                    </a>

                    <ul
                      className="dropdown-menu dropdown-menu-lg-start dropdown-menu-end"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item nav-link"
                          to="/all-courses"
                        >
                          List Course
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item nav-link" to="/batchs">
                          All Batch
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item nav-link"
                          to="/all-faculty"
                        >
                          OUR FACULTY
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item nav-link"
                          to="/this-month-lead"
                        >
                          This Month Leads
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item ">
                    <Link className="nav-link " to="/addnew-quiry">
                      Add new Quries
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      onClick={() => localStorage.clear()}
                      className="nav-link"
                    >
                      Logout{" "}
                    </Link>
                  </li>
                  {/* 
                      // <i className="fa-solid fa-arrow-right-from-bracket logout-link"></i>
                  <li className="nav-item">
                    <a className="nav-link " href="./messages.html">
                      <i className="fa-solid fa-comment-dots"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link " href="./messages.html">
                      <i className="fa-solid fa-money-bill-1"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./messages.html">
                      <i className="fa-solid fa-bell shak"></i>
                    </a>
                  </li>
                  */}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
