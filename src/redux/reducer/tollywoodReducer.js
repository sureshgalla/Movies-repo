import * as types from "../types/types";

const tollywoodReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_TOLLYWOOD_MOVIES:
      //console.log("tollywoodReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default tollywoodReducer;
