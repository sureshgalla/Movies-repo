import * as types from "../types/types";

const NowPlayingReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_NOW_PLAYING:
      //console.log("nowPlayingReducer22", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default NowPlayingReducer;
