import React from "react";
import "./LoginButtonTypes.css";
import Background from "./icon-background.png";

const LoginButtonTypes = ({ type, icon }) => {
  return (
    <div className="login-model-container">
      <img src={Background} alt="" className="styled-border" />
      <img src={icon} alt="" className="login-model-icons" />
      <div className="login-model-btn-container">
        <button className="login-model-btn">
          Continue with {type}{" "}
          {type !== "Apple" && type !== "FaceBook" ? "Account" : ""}
        </button>
      </div>
    </div>
  );
};

export default LoginButtonTypes;
