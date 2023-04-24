import React from "react";
import "./Model.css";
import { Modal, Input, Button } from "antd";
import { MailFilled } from "@ant-design/icons";

const Model = ({ openModel, handleCancel, moviesFooter }) => {
  return (
    <Modal
      open={openModel}
      footer={null}
      onCancel={handleCancel}
      centered
      width={422}
      className="my-custom-modal"
    >
      <div className={moviesFooter ? "movie-modal-header" : "my-modal-header"}>
        <h1
          className={
            moviesFooter ? "movie-modal-news-letter" : "modal-news-letter"
          }
        >
          News Letter
        </h1>
      </div>

      <p className="my-modal-content">
        Subscribe to our newsletter system now to get latest news from us
      </p>
      <div className="input-wrapper">
        <Input
          addonBefore={
            <MailFilled
              style={{
                fontSize: "20px",
              }}
            />
          }
          placeholder="Enter your email"
          className="my-input"
        />
      </div>
      <Button
        className={moviesFooter ? "movies-subscribe-btn" : "subscribe-btn"}
      >
        Subscribe Now
      </Button>
    </Modal>
  );
};

export default Model;
