import React, { Fragment } from "react";
import styles from "./SideBar.module.css";

const SideBar = (props) => {
  return (
    <Fragment>
      <nav
        class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
        style={{ background: "var(--bs-red)", color: "var(--bs-green)" }}
      >
        <div class="container-fluid d-flex flex-column p-0">
          <img
            class="rounded-circle mb-3 mt-4"
            src="assets/img/clipboard-image-4.png"
            width="94"
            height="94"
            style={{ background: "#ffffff", width: "45%", height: "45%" }}
            alt="logo"
          />
          <div class="align-items-xl-center"></div>
          <hr class="sidebar-divider my-0" />
          <ul class="navbar-nav text-light" id="accordionSidebar">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="profile.html"
                style={{ color: "var(--bs-accordion-bg)" }}
              >
                <i class="fas fa-user"></i>
                <span>Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="table.html">
                <i class="fas fa-table"></i>
                <span>Lineage</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html">
                <i class="far fa-user-circle"></i>
                <span>Logout</span>
              </a>
            </li>
            <li class="nav-item"></li>
          </ul>
          <div class="text-center d-none d-md-inline">
            <button
              class="btn rounded-circle border-0"
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
