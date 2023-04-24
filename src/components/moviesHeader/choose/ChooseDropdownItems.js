import React from "react";
import { Link } from "react-router-dom";
import "./ChooseDropDownItems.css";

const ChooseDropdownItems = ({ filter }) => {
  return (
    <div
      className={
        filter ? "upcomingMovies-choose-dropdown" : "choose-dropdown-container"
      }
    >
      <Link to="/opening-this-week" className="choose-dropdown-item-1">
        Opening this week
      </Link>
      <div className="choose-dropdown-item-center-border"></div>
      <Link to="/up-comeing-movies" className="choose-dropdown-item-2">
        Upcoming Movies
      </Link>
    </div>
  );
};

export default ChooseDropdownItems;
