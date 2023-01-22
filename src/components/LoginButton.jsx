import React, { Fragment } from "react";
import styles from "./LoginButton.module.css";

const LoginButton = () => {
  return (
    <Fragment>
      <a
        className={"btn btn-primary d-block btn-user w-100"}
        style={{ background: "var(--bs-red)", border: "var(--bs-red)" }}
        role="button"
        href="profile.html"
      >
        Login
      </a>
    </Fragment>
  );
};

export default LoginButton;
