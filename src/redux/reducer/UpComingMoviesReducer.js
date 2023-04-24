import * as types from "../types/types";

const UpComingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_UP_COMING_MOVIES:
      //console.log("UpComingMoviesReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default UpComingMoviesReducer;
