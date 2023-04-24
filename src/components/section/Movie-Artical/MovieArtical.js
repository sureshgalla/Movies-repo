import React from "react";
import "./MovieArtical.css";

const MovieArtical = () => {
  return (
    <div className="movie-artical-container">
      <h1 className="movie-articles">Movie Articles</h1>
      <div className="img-container">
        <img
          className="movie-articles-img"
          src="https://www.pinkvilla.com/imageresize/rrr-review.jpg?width=752&t=pvorg"
          alt=""
        />
      </div>
      <p className="movie-article-content">
        on this page that ... Jr NTR, Ram Charan's 'RRR' tops IMDB's list of
        most popular Indian Movies in 2022; 'Major', 'Sita Ramam' secure 7th and
        8... Lorem ipsum dolor sit amet, consectetur Jr NTR, Ram Charan's 'RRR'
        tops IMDB's list of most popular Indian Movies in 2022; 'Major', 'Sita
        Ramam' secure 7th and 8... Lorem ipsum dolor sit amet, consecteturJr
        NTR,
      </p>
      <h1 className="movie-artical-view-all">View All</h1>
    </div>
  );
};

export default MovieArtical;
