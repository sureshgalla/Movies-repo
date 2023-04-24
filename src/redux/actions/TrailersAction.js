import * as types from "../types/types";

export const getTrailerContent = (data) => {
  //console.log("getFooterContent", data);
  return {
    type: types.LOAD_TRAILER_CONTENT,
    payload: data,
  };
};

export const loadTrailerContent = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/trailer_content")
      .then((res) => res.json())
      .then((data) => {
        // console.log("fetchingContent", data);
        dispatch(getTrailerContent(data));
      });
  };
};
