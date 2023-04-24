import { Modal } from "antd";
import React from "react";
import "./LoginModel.css";
import Input from "./Input";

const LoginModel = ({ openModel, handleCancel }) => {
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
      <Input placeholder="Continue with Google Account" />
      <Input placeholder="Continue with G-mail Account" />
      <Input placeholder="Continue with Apple" />
    </Modal>
  );
};

export default LoginModel;
