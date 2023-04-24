import React from "react";
import MoviesInHome from "../moviesInHome/MoviesInHome";

const UpComeingMovies = () => {
  const filter = {
    filterLanguages: false,
  };
  return (
    <div>
      <MoviesInHome upcomeingMovies={true} filter={filter} />
    </div>
  );
};

export default UpComeingMovies;
