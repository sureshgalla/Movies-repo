import { Modal } from "antd";
import React from "react";
import "./LoginModel.css";
import Button from "./LoginButtonTypes";
import Google from "./google.png";
import GMail from "./gmail.png";
import Apple from "./apple.png";
import indiaIcon from "./india-icon.png";
import SubmitBtn from "./Submit-btn.png";

const LoginModel = ({ openModel, handleCancel }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Modal
      open={openModel}
      onCancel={handleCancel}
      footer={null}
      className="login-modal"
    >
      <div className="login-header">
        <h1 className="login-header-text">Get started with Movie Rating</h1>
      </div>
      <div className="login-content">
        <p>
          By continuing, you agree to the{" "}
          <a href="http://google.com">Privacy Policy</a> and the{" "}
          <a href="http://google.com">Terms and Policies</a>, and to receive
          email from Movie Rating.
        </p>
      </div>
      <div style={{ marginTop: "33px" }}>
        <Button type="Google" icon={Google} />
        <Button type="Google" icon={GMail} />
        <Button type="Apple" icon={Apple} />
      </div>
      <div className="or">(OR)</div>
      <div className="login-number-input-container">
        <img src={indiaIcon} alt="" className="india-icon" />
        <span className="cuntry-code">+91</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="number-input"
            placeholder="Continue with mobile number"
            onChange={(e) => e.target.value}
          />
          <button className="number-submit">
            <img src={SubmitBtn} alt="" />
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default LoginModel;
