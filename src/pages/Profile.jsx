import React from "react";
import NavBar from "../components/UI/NavBars/NavBar";
import SideBar from "../components/UI/NavBars/SideBar";
import styles from "./Profile.module.css";
// import "../assets/js/theme";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <NavBar />
          <div className="container-fluid">
            <h3 className="text-dark mb-4">Profile</h3>
            <div className="row mb-3">
              <div className="col-lg-4">
                <div className="card mb-3">
                  <div className="card-body text-center shadow">
                    <img
                      className="rounded-circle mb-3 mt-4"
                      src="assets/img/sample-person.png"
                      width="160"
                      height="160"
                      alt="profileImage"
                    />
                    <div className="mb-3">
                      <button className="btn btn-primary btn-sm" type="button">
                        Change Photo
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="text-primary fw-bold m-0">Lineage</h6>
                  </div>
                  <div className="card-body">
                    <h4 className="small fw-bold">
                      Canada<span className="float-end">6%</span>
                    </h4>
                    <div className="progress progress-sm mb-3">
                      <div
                        className="progress-bar bg-danger"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "6%" }}
                      >
                        <span className="visually-hidden">6%</span>
                      </div>
                    </div>
                    <h4 className="small fw-bold">
                      Yellow Head<span className="float-end">64%</span>
                    </h4>
                    <div className="progress progress-sm mb-3">
                      <div
                        className="progress-bar bg-warning"
                        aria-valuenow="64"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "64%" }}
                      >
                        <span className="visually-hidden">64%</span>
                      </div>
                    </div>
                    <h4 className="small fw-bold">
                      USA<span className="float-end">3%</span>
                    </h4>
                    <div className="progress progress-sm mb-3">
                      <div
                        className="progress-bar bg-primary"
                        aria-valuenow="3"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "3%" }}
                      >
                        <span className="visually-hidden">3%</span>
                      </div>
                    </div>
                    <h4 className="small fw-bold">
                      Africa<span className="float-end">17%</span>
                    </h4>
                    <div className="progress progress-sm mb-3">
                      <div
                        className="progress-bar bg-info"
                        aria-valuenow="17"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "17%" }}
                      >
                        <span className="visually-hidden">17%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow card">
                  <a
                    className="btn btn-link text-start card-header fw-bold"
                    data-bs-toggle="collapse"
                    aria-expanded="true"
                    aria-controls="collapse-4"
                    href="#collapse-4"
                    role="button"
                  >
                    Personal Annotations
                  </a>
                  <div className="collapse show" id="collapse-4">
                    <div className="card-body">
                      <p className="m-0">
                        <br />
                        <span style={{ color: "rgb(0, 0, 0)" }}>
                          From they fine john he give of rich he. They age and
                          draw mrs like. Improving end distrusts may instantly
                          was household applauded incommode. Why kept very ever
                          home mrs. Considered sympathize ten uncommonly
                          occasional assistance sufficient not. Letter of on
                          become he tended active enable to. Vicinity relation
                          sensible sociable surprise screened no up as.
                        </span>
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row mb-3 d-none">
                  <div className="col">
                    <div className="card text-white bg-primary shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0">
                              <strong>65.2%</strong>
                            </p>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-rocket fa-2x"></i>
                          </div>
                        </div>
                        <p className="text-white-50 small m-0">
                          <i className="fas fa-arrow-up"></i>&nbsp;5% since last
                          month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card text-white bg-success shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0">
                              <strong>65.2%</strong>
                            </p>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-rocket fa-2x"></i>
                          </div>
                        </div>
                        <p className="text-white-50 small m-0">
                          <i className="fas fa-arrow-up"></i>&nbsp;5% since last
                          month
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card shadow mb-3">
                      <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Who I am</p>
                      </div>
                      <div className="card-body">
                        <form>
                          <div>
                            <label className="form-label" htmlFor="username">
                              <strong>Full Name</strong>
                            </label>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="first_name"
                                    placeholder="First"
                                    name="first_name"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="middle_name"
                                    placeholder="Middle"
                                    name="last_name"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="last_name-1"
                                    placeholder="Last"
                                    name="last_name"
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <label className="form-label" htmlFor="username">
                              <strong>Traditional Name</strong>
                            </label>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="tfirst_name"
                                    placeholder="First"
                                    name="tfirst_name"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="tmiddle_name"
                                    placeholder="Middle"
                                    name="tmiddle_name"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="tlast_name"
                                    placeholder="Last"
                                    name="tlast_name"
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Maiden Name</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="maiden_name"
                                    placeholder="Maiden"
                                    name="maiden_name"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Goes By</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="goesby_name"
                                    placeholder="Goes By"
                                    name="goesby_name"
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Birthplace</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="birthplace"
                                    placeholder=""
                                    name="birthplace"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Birthdate</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    id="birthdate"
                                    placeholder=""
                                    name="birthdate"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Age</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="number"
                                    id="age"
                                    placeholder=""
                                    name="age"
                                  ></input>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Primary Language</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="planguage"
                                    placeholder=""
                                    name="planguage"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Marital Status</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="marital_status"
                                    placeholder=""
                                    name="marital_status"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    id="generation"
                                    name="generation"
                                  >
                                    <strong>Generation</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="birth_place-8"
                                    placeholder=""
                                    name="birth_place"
                                  ></input>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="username"
                                  >
                                    <strong>Cultural Origin</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="cultural_orig"
                                    placeholder=""
                                    name="cultural_orig"
                                  ></input>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    id="cultural_role"
                                    name="cultural_role"
                                  >
                                    <strong>Cultural Role</strong>
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    id="birth_place-4"
                                    placeholder=""
                                    name="birth_place"
                                  ></input>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3"></div>
                        </form>
                      </div>
                    </div>
                    <div className="card shadow">
                      <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">About me</p>
                      </div>
                      <div className="card-body">
                        <form>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="address">
                              <strong>Address</strong>
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="address"
                              placeholder="Sunset Blvd, 38"
                              name="address"
                            ></input>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3">
                                <label className="form-label" htmlFor="city">
                                  <strong>City</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="city"
                                  placeholder="Los Angeles"
                                  name="city"
                                ></input>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3">
                                <label className="form-label" htmlFor="country">
                                  <strong>Country</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="country"
                                  placeholder="USA"
                                  name="country"
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow mb-5">
              <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">Membership Details</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 col-xxl-3">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>Oficial Band</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xxl-2">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>Member ID</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-1"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xxl-2">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>Member Status</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-2"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xxl-1 offset-xxl-0">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>Voter</strong>
                          </label>
                          <div className="form-check form-switch">
                            {/* <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck-2"
                            >
                              <label className="form-check-label"></label>
                            </input> */}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-xxl-2">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="city">
                        <strong>Social Assistance</strong>
                      </label>
                      <div className="form-check form-switch">
                        {/* <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-3"
                        >
                          <label
                            className="form-check-label"
                            htmlFor="formCheck-3"
                          ></label>
                        </input> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xxl-2">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>Treaty Number</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-15"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xxl-3">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>SSN</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-5"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xxl-2">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>Receive PCD</strong>&nbsp;By
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-6"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xxl-2">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>PCD</strong>&nbsp;Custom Group
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-7"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-xxl-2">
                    <form>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="city">
                            <strong>PCD Register Date</strong>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="oficial_band-9"
                            placeholder=""
                            name="city"
                          ></input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary btn-sm" type="submit">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright">
              <span>Copyright © YTC 2023</span>
            </div>
          </div>
        </footer>
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Profile;
