import * as types from "../types/types";

const PopularWebSeriesReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POPULAR_WEB_SERIES:
      //console.log("PopularWebSeriesReducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default PopularWebSeriesReducer;
