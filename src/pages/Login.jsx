import React, { Fragment } from "react";
import imgLoginBanner from "../assets/login-banner.png";
import imgLogo from "../assets/ytc-logo.png";

const Login = () => {
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

                      //  style={{background:{imgLoginBanner}}}}
                    >
                      <img
                        id="banner"
                        src={imgLoginBanner}
                        alt="ytc young girl dancing"
                      />
                    </div>
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
                            autofocus
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            id="inputPassword"
                            class="form-control form-control-user"
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                          />
                        </div>
                        <div class="mb-3">
                          <div class="custom-control custom-checkbox small">
                            <div class="form-check">
                              <input
                                id="formCheck-1"
                                class="form-check-input custom-control-input"
                                type="checkbox"
                              />
                              <label
                                class="form-check-label custom-control-label"
                                for="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary d-block btn-user w-100"
                          role="button"
                          style={{ background: "red" }}
                          href="profile.html"
                        >
                          Login
                        </a>
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
