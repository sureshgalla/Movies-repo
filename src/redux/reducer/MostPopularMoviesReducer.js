import * as types from "../types/types";

const MostPopularMovies = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_MOST_POPULAR_MOVIES:
      //console.log("mostPoularMoviesReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default MostPopularMovies;
