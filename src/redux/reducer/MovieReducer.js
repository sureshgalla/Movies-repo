import * as types from "../types/types";
const initialState = {
  movies: [],
  loading: false,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES:
      console.log(action.payload);
      return { ...state, movies: action.payload, loading: true };
    default:
      return state;
  }
};

export default MovieReducer;
