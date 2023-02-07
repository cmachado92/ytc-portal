import React, { Fragment, useEffect, useState } from "react";
import { fetchLoginToken } from "../../../api/api";

const LoginButton = () => {
  const [token, setToken] = useState();
  const loginRequest = useEffect(() => {
    fetchLoginToken();
  });
  return (
    <Fragment>
      <a
        className={"btn btn-primary d-block btn-user w-100"}
        style={{ background: "var(--bs-red)", border: "var(--bs-red)" }}
        onClick={fetchLoginToken()}
        role="button"
      >
        <span>Token: {token}</span>
        Login
      </a>
    </Fragment>
  );
};

export default LoginButton;
