import * as types from "../types/types";

const hollywoodReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_HOLLYWOOD_MOVIES:
      //console.log("hollywoodReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default hollywoodReducer;
