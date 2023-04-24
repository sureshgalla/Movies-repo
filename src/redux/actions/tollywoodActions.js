import * as types from "../types/types";

export const getTollywoodMovies = (movies) => {
  //console.log("getTollywoodMoviesAction", movies);
  return { type: types.LOAD_TOLLYWOOD_MOVIES, payload: movies };
};

export const loadTollywoodMovies = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/Tollywood")
      .then((res) => res.json())
      .then((movie) => {
        //console.log("loadTollywoodMovies", movie);
        dispatch(getTollywoodMovies(movie));
      });
  };
};
