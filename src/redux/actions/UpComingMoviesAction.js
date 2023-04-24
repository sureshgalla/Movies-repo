import * as types from "../types/types";

export const getUpComingMovies = (data) => {
  //console.log("upComingMoviesAction", data);
  return {
    type: types.LOAD_UP_COMING_MOVIES,
    payload: data,
  };
};

export const loadUpComingMovies = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/up_coming_movies")
      .then((res) => res.json())
      .then((data) => {
        //console.log("fetchingUpComingMovies", data);
        dispatch(getUpComingMovies(data));
      });
  };
};
