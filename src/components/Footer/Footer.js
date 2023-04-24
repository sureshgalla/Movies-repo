import React, { useState } from "react";
import Model from "../Model/Model";
import SocialMediaIcons from "../socilaMediaIcons/SocialMediaIcons";
import "./Footer.css";
import { Button } from "antd";

const Footer = ({ moviesFooter }) => {
  const [openModel, setOpenModel] = useState(false);
  const joinNewsletter = () => {
    setOpenModel(true);
  };

  const handleOk = () => {
    setOpenModel(false);
  };

  const handleCancel = () => {
    setOpenModel(false);
  };
  return (
    <>
      <div
        className={
          moviesFooter ? "moviein-theater-footer-container" : "footer-container"
        }
      >
        <div>
          <h1 className="help">Help</h1>
          <h1 className="about-movie">About Movie rating</h1>
          <h1 className="what-movie-rating">What's the Movie rating?</h1>
          <h1 className="copy-right">
            &copy; Copyright IT WORLD. All Rights Reserved.
          </h1>
        </div>
        <div className={moviesFooter ? "movie-footer-critics-container" : ""}>
          <h1 className="criics-submission">Critics Submission</h1>
          <h1 className="licensing">Licensing</h1>
          <h1 className="advertise">Advertise with us</h1>
          <h1 className="carrer">Carrer</h1>
        </div>
        <div
          className={moviesFooter ? "movie-footer-newsletter-container" : ""}
        >
          <h1 className="news-letter">Join the Newsletter</h1>
          <p className="content">
            Get the freshest reviews, news and more to your inbox directly
          </p>
          <Button
            className={moviesFooter ? "movies-footer-button" : "button"}
            onClick={joinNewsletter}
          >
            Join the Newsletter
          </Button>
        </div>
        <div>
          <h1 className="policies">Privecy Policies</h1>
          <div className="divider">{"  |  "}</div>
          <h1 className="terms">Terms and Policies</h1>
        </div>
        <Model
          openModel={openModel}
          handleOk={handleOk}
          handleCancel={handleCancel}
          moviesFooter={moviesFooter}
        />
        {moviesFooter && (
          <div>
            <span className="footer-followus">Follow Us</span>
            <SocialMediaIcons moviesFooter={moviesFooter} />
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
