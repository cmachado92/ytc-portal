import React, { Fragment, useEffect, useState } from "react";
import APIRequest, { fetchLoginToken } from "../../../api/APIRequest";

const LoginButton = () => {
  const [token, setToken] = useState();
  const handleDataReceived = (responseData) => {
    setToken(responseData);
  };
  const loginRequest = useEffect(() => {
    <APIRequest onDataReceived={handleDataReceived}></APIRequest>;
    alert("sup");
  }, []);

  return (
    <Fragment>
      <button
        className={"btn btn-primary d-block btn-user w-100"}
        style={{ background: "var(--bs-red)", border: "var(--bs-red)" }}
        onClick={loginRequest}
        role="button"
      >
        <span>Token: {token}</span>
        Login
      </button>
    </Fragment>
  );
};

export default LoginButton;
