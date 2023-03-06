import React, { Fragment } from "react";
import LoginButton from "../components/UI/Login/LoginButton";
import imgLoginBanner from "../assets/img/login-banner.png";
import imgLogo from "../assets/img/ytc-logo.png";

const Login = () => {
  console.log("test1");
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="flex-grow-1 bg-login-image"
                      style={{ backgroundImage: `url(${imgLoginBanner})` }}
                    ></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <img
                          id="logo"
                          width="153"
                          height="142"
                          src={imgLogo}
                          alt="ytc young girl dancing"
                        />
                      </div>
                      <div className="text-center">
                        <h4
                          className="text-dark mb-4"
                          style={{ marginTop: "24px" }}
                        >
                          Welcome Back!
                        </h4>
                      </div>
                      <form className="user">
                        <div className="mb-3">
                          <input
                            id="inputUsername"
                            className="form-control form-control form-control form-control-user"
                            type="text"
                            aria-describedby="userHelp"
                            placeholder="Enter username"
                            name="email"
                            autoFocus
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            id="inputPassword"
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                id="formCheck-1"
                                className="form-check-input custom-control-input"
                                type="checkbox"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <LoginButton />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
