import React from "react";

const LoginButton = (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <span
      className={"btn btn-primary d-block btn-user w-100"}
      style={{ background: "var(--bs-red)", border: "var(--bs-red)" }}
      onClick={handleClick}
      role="button"
    >
      Login
    </span>
  );
};

export default LoginButton;
