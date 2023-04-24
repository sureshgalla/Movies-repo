import * as types from "../types/types";

export const getImages = (images) => {
  return {
    type: types.LOAD_IMAGES,
    payload: images,
  };
};

export const loadImages = () => {
  return function (dispatch) {
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((data) => {
        //console.log("fetching-images", data);
        dispatch(getImages(data));
      });
  };
};
