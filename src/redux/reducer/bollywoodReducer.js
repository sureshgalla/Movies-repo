import * as types from "../types/types";

const bollywoodReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_BOLLYWOOD_MOVIES:
      //console.log("bollywoodReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default bollywoodReducer;
