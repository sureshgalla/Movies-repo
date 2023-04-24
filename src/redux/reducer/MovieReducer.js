import * as types from "../types/types";
const initialState = {
  movies: [],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default MovieReducer;
