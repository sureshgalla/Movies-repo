import * as types from "../types/types";

export const getPopularWebSeries = (data) => {
  //console.log("getPopularWebSeries", data);
  return {
    type: types.LOAD_POPULAR_WEB_SERIES,
    payload: data,
  };
};

export const loadPopularWebSeries = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/popular_web_series")
      .then((res) => res.json())
      .then((data) => {
        //console.log("fetchingPopularWebSeries", data);
        dispatch(getPopularWebSeries(data));
      });
  };
};
