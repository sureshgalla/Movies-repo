import React from "react";
import NowPlaying from "./now-playing/NowPlaying";
import MostPopularMovies from "./MostPopularMovies/MostPopularMovies";
import UpComingMovies from "./UpComingMovies/UpComingMovies";
import PopularWebSeries from "./PopularWebSeries/PopularWebSeries";
import AddSpace from "./AddSpace/AddSpace";
import MovieLinks from "./MovieLinks/MovieLinks";
import Trailer from "./Trailer/Trailer";

const Section = ({
  nowPlaying,
  mostPopularMovies,
  upComingMovies,
  popularWebSeries,
  trailerContent,
}) => {
  return (
    <div>
      <NowPlaying data={nowPlaying} />
      <MostPopularMovies data={mostPopularMovies} />
      <UpComingMovies data={upComingMovies} />
      <PopularWebSeries data={popularWebSeries} />
      <AddSpace />
      <MovieLinks />
      <Trailer data={trailerContent} />
    </div>
  );
};

export default Section;
