import * as types from "../constants/constants";
const initialState = {
  imageList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_IMAGES_SUCCESS: {
      return { ...state, imageList: action.allImages };
    }
    case types.UPDATE_STATE_WITH_NEW_IMAGE: {
      return { ...state, imageList: [...state.imageList, action.payload] };
    }
    default:
      return state;
  }
}
