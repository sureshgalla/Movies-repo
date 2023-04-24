import React from "react";
import { Carousel } from "antd";
import "./Header.css";

const Header = ({ movie }) => {
  //console.log("movie from home", movie);
  return (
    <>
      <Carousel>
        {movie.movies.movies.map((movie, i) => (
          <div key={i} className="col-md-12">
            <div className="col-md-6">
              <div>
                <img
                  className="carousel-img"
                  src={movie.image}
                  alt={movie.title}
                />
              </div>
            </div>
            <div className="header col-md-6">
              <div className="header-content">
                <h1 className="movie-name">{movie.title}</h1>
                <p className="movie-content">
                  Thalapathy Vijay, who enjoys a good following in Telugu
                  states, has now come up with a family entertainer Vaarasudu.
                  Directed by Vamshi Paidipally, the movie has Rashmika Mandanna
                  as the female lead. The film hit the screens today, and let’s
                  see how it is.
                </p>
                <h1 className="rating">Rate Movie</h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Header;
