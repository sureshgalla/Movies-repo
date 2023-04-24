import React from "react";
import {
  InstagramFilled,
  YoutubeFilled,
  FacebookFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import "./SocialMediaIcons.css";

const SocialMediaIcons = ({ moviesFooter }) => {
  return (
    <div className={moviesFooter ? "movies-icon-wrapper" : "icon-wrapper"}>
      <InstagramFilled className="custom-icon" />
      <YoutubeFilled className="custom-icon" />
      <FacebookFilled className="custom-icon" />
      <TwitterOutlined className="custom-icon" />
    </div>
  );
};

export default SocialMediaIcons;
