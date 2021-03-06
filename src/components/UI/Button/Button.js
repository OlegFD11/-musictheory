import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`Button ${props.type}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
