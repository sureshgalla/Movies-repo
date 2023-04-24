import * as types from "../types/types";
const initialState = {
  images: [],
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_IMAGES:
      return { ...state, images: action.payload };
    default:
      return state;
  }
};

export default imageReducer;
