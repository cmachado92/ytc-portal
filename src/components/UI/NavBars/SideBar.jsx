import React, { Fragment } from "react";
import styles from "./SideBar.module.css";
import logoImage from "../../../assets/img/ytc-circular-logo.png";

const SideBar = (props) => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
        style={{ background: "var(--bs-red)", color: "var(--bs-green)" }}
      >
        <div className="container-fluid d-flex flex-column p-0">
          <img
            className="rounded-circle mb-3 mt-4"
            src={logoImage}
            width="94"
            height="94"
            style={{ background: "#ffffff", width: "45%", height: "45%" }}
            alt="logo"
          />
          <div className="align-items-xl-center"></div>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="profile.html"
                style={{ color: "var(--bs-accordion-bg)" }}
              >
                <i className="fas fa-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="table.html">
                <i className="fas fa-table"></i>
                <span>Lineage</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                <i className="far fa-user-circle"></i>
                <span>Logout</span>
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            ></button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default SideBar;
