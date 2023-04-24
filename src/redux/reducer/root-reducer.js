import { combineReducers } from "redux";
import movies from "./MovieReducer";
import images from "./imagesReducer";
import nowPlaying from "./NowPlayingReducer";
import mostPopularMovies from "./MostPopularMoviesReducer";
import upComingMovies from "./UpComingMoviesReducer";
import popularWebSeries from "./PopularWebSeriesReducer";
import trailerContent from "./TrailerContentReducer";
import tollywoodMovies from "./tollywoodReducer";
import bollywoodMovies from "./bollywoodReducer";
import hollywoodMovies from "./hollywoodreducer";

const rootReducer = combineReducers({
  movies,
  images,
  nowPlaying,
  mostPopularMovies,
  upComingMovies,
  popularWebSeries,
  trailerContent,
  tollywoodMovies,
  bollywoodMovies,
  hollywoodMovies,
});

export default rootReducer;
