import React, { useState, Fragment } from "react";
import LoginButton from "../components/UI/Login/LoginButton";
import { APIRequest, APILogin } from "../api/APIRequest";
import Cookies from "js-cookie";
import imgLoginBanner from "../assets/img/login-banner.png";
import imgLogo from "../assets/img/ytc-logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    isRememberMe: false,
  });
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogIn = async () => {
    if (!formData.username || !formData.password) return;
    try {
      const token = await APILogin({
        username: formData.username,
        password: formData.password,
      });

      // store token in local storage
      localStorage.setItem("ytctoken", token);
      localStorage.setItem("ytctokenTS", Date.now);

      //remember me
      if (formData.isRememberMe) {
        Cookies.set("ytcusername", formData.username);
        Cookies.set("ytcpassword", formData.password);
      }

      setToken(token);
      setisLoggedIn(true);
      // try {
      //   const token = await APILogin({
      //     username: formData.username,
      //     password: formData.password,
      //   });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDataReceived = (responseData) => {
    if (responseData != null && responseData) {
      token(responseData);
    }
  };

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
                            name="username"
                            autoFocus
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            id="inputPassword"
                            className="form-control form-control-user"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleInputChange}
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
                                checked={formData.isRememberMe}
                                onChange={(event) =>
                                  setFormData({
                                    ...formData,
                                    isRememberMe: event.target.checked,
                                  })
                                }
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
                        <LoginButton onClick={handleLogIn} />
                        <span>Token: {token}</span>
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
