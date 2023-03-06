import React, { Fragment, useState } from "react";
import APIRequest from "../../../api/APIRequest";

const LoginButton = () => {
  const [token, setToken] = useState("");
  const [hasClicked, setHasClicked] = useState(false);

  const handleDataReceived = (responseData) => {
    setToken(responseData);
  };
  const handleClick = () => {
    setHasClicked(true);
  };

  return (
    <Fragment>
      <span
        className={"btn btn-primary d-block btn-user w-100"}
        style={{ background: "var(--bs-red)", border: "var(--bs-red)" }}
        onClick={handleClick}
        role="button"
      >
        Login
      </span>
      {hasClicked && <APIRequest onDataReceived={handleDataReceived} />}
      <p>Token: {token}</p>
    </Fragment>
  );
};

export default LoginButton;
