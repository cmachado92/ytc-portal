import React, { Fragment } from "react";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <Fragment>
      <nav classNameName="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
        <div className="container-fluid">
          <button
            classNameName="btn btn-link d-md-none rounded-circle me-3"
            id="sidebarToggleTop"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                className="bg-light form-control border-0 small"
                type="text"
                placeholder="Search for ..."
              >
                <button className="btn btn-primary py-0" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </input>
            </div>
          </form>
          <ul className="navbar-nav flex-nowrap ms-auto">
            <li classNameName="nav-item dropdown d-sm-none no-arrow">
              <a
                className="dropdown-toggle nav-link"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                href="#"
              >
                <i className="fas fa-search"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end p-3 animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="me-auto navbar-search w-100">
                  <div className="input-group">
                    <input
                      className="bg-light form-control border-0 small"
                      type="text"
                      placeholder="Search for ..."
                    ></input>
                    <div className="input-group-append">
                      <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1"></li>
            <div className="d-none d-sm-block topbar-divider"></div>
            <li className="nav-item dropdown no-arrow">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="#"
                >
                  <span className="d-none d-lg-inline me-2 text-gray-600 small">
                    John Doe
                  </span>
                  <img
                    className="border rounded-circle img-profile"
                    src="assets/img/ytc-circular-logo.png"
                    alt="logo"
                  ></img>
                </a>
                <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                    &nbsp;Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                    &nbsp;Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                    &nbsp;Activity log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                    &nbsp;Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
