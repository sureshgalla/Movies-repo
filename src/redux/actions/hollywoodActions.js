import * as types from "../types/types";

export const getHollywoodMovies = (movies) => {
  //console.log("getHollywoodMoviesAction", movies);
  return { type: types.LOAD_HOLLYWOOD_MOVIES, payload: movies };
};

export const loadHollywoodMovies = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/Hollywood")
      .then((res) => res.json())
      .then((data) => {
        //console.log("loadHollywoodMovies", data);
        dispatch(getHollywoodMovies(data));
      });
  };
};
