import * as types from "../types/types";

export const getNowPlaying = (data) => {
  //console.log("getNowPlayingAction12", data);
  return {
    type: types.LOAD_NOW_PLAYING,
    payload: data,
  };
};

export const loadNowPlaying = () => {
  return function (dispatch) {
    fetch(" http://localhost:5000/now_playing")
      .then((res) => res.json())
      .then((data) => {
        //console.log("fetchingNowPlaying", data);
        dispatch(getNowPlaying(data));
      });
  };
};
