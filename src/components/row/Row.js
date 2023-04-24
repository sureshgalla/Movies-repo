import React from "react";
import "./Row.css";
import { LikeFilled } from "@ant-design/icons";

const Row = ({ data, title }) => {
  console.log("rowComponent", data);
  console.log("title", title);
  return (
    <div className="row-container">
      <span className="row-view-all">View All</span>
      <span className="row-type">{title}</span>
      {data.map((movie, i) => (
        <div key={i}>
          <img src={movie.img} alt={movie.id} className="row-movie-img" />
          <LikeFilled className="row-like-icon" /> {"  "}
          <span className="row-rating-percentage">
            {movie.rating_perecentage}
          </span>
          <span className="row-movie-title">{movie.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Row;
