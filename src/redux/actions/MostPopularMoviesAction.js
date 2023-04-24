import * as types from "../types/types";

export const getMostPopularMovies = (data) => {
  //console.log("getMostPopularMovies", data);
  return {
    type: types.LOAD_MOST_POPULAR_MOVIES,
    payload: data,
  };
};

export const loadMostPopularMovies = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/most_popular_movies")
      .then((res) => res.json())
      .then((data) => {
        //console.log("fetchingMostPopularMovies", data);
        dispatch(getMostPopularMovies(data));
      });
  };
};
