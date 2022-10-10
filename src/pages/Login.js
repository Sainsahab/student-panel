import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const navigate = useNavigate();
  console.log(email);
  console.log(password);

  const UserLogin = async (e) => {
    e.preventDefault();
    let item = { email, password };
    try {
      const response = await axios.post(
        "https://lionfish-app-hbj76.ondigitalocean.app/api/user/login",
        JSON.stringify(item),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      navigate("/dashbord");
    } catch (error) {
      console.log(error.response.data.message);
      toast.warn(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Login - infonic Query Management System</title>
      </Helmet>
      <section className="vh-100  ">
        <div className="container pt-4 pb-3 h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center login-form">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form className="ms-5" onSubmit={UserLogin}>
                        <div className="d-flex  mb-3 pb-1">
                          <span className="me-3"> </span>
                          <span className="h1 fw-bold mb-0">
                            <img src="/logo.png" alt="#" className="Formlogo" />
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control"
                            placeholder="Email"
                            required
                            onChange={(e) => Setemail(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            className="form-control form-control"
                            placeholder="Password"
                            required
                            onChange={(e) => Setpassword(e.target.value)}
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-primary login-button"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        {/* <Link className="small text-muted" to="#!">
                          Forgot password?
                        </Link>
                  
                        <p className="mt-3">
                        <Link to="#!" className="small text-muted">
                        Terms of use.
                        </Link>
                        <Link to="#!" className="small text-muted">
                        Privacy policy
                        </Link>
                        </p>
                      */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
