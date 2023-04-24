import * as types from "../types/types";

export const getMovies = (movies) => {
  //console.log("actions88", movies);
  return {
    type: types.LOAD_MOVIES,
    payload: movies,
  };
};

export const laodMovies = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/movies")
      .then((data) => data.json())
      .then((res) => {
        // console.log("fetching-data", res);
        dispatch(getMovies(res));
      })
      .catch((err) => console.log(err));
  };
};

//https://api.themoviedb.org/3/movie/po...
//https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
