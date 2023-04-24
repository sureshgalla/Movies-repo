import React from "react";
import "./MoviesRow.css";
import { LikeFilled } from "@ant-design/icons";

const MoviesRow = ({ data, upcomeingMovies }) => {
  return (
    <div className="movies-row-container">
      {data.map((movie, i) => (
        <div key={i} className="movies-container">
          <img src={movie.img} alt="" className="movie-row-img" />
          <LikeFilled className="movie-row-like" />
          <span className="movies-row-percentage">
            {movie.rating_perecentage}
          </span>
          <span className="movies-row-line-1"></span>

          <span className="upcomeingMovies-row-title">{movie.title}</span>
          <span className="movie-row-line-3"></span>

          <span className="upcomeingMovies-release-date">
            Release date: 10 Feb 2023
          </span>
        </div>
      ))}
    </div>
  );
};

export default MoviesRow;
