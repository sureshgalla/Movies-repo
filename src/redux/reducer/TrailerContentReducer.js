import * as types from "../types/types";

const TrailerContentReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_TRAILER_CONTENT:
      //console.log("FooterContentReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default TrailerContentReducer;
