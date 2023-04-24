import * as types from "../types/types";

export const getBollywoodMovies = (movie) => {
  //console.log("getBollywoodMoviesAction", movie);
  return { type: types.LOAD_BOLLYWOOD_MOVIES, payload: movie };
};

export const loadBollywoodMovies = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/Bollywood")
      .then((res) => res.json())
      .then((data) => {
        //console.log("loadBollywoodMovies", data);
        dispatch(getBollywoodMovies(data));
      });
  };
};
