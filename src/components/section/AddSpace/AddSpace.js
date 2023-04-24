import React from "react";
import "./AddSpace.css";
import { CloseOutlined } from "@ant-design/icons";

const AddSpace = () => {
  return (
    <div className="add-space-container">
      <div className="icon-container">
        <CloseOutlined className="close-icon" />
      </div>
      <h1 className="add-spaxe-text">Space for Advertisement</h1>
    </div>
  );
};

export default AddSpace;
