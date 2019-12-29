import * as types from "../constants/constants";
import Axios from "axios";

export const getAllImagesSuccess = allImages => {
  return {
    type: types.GET_ALL_IMAGES_SUCCESS,
    allImages
  };
};

export const updateNewImage = newImage => {
  return {
    type: types.UPDATE_STATE_WITH_NEW_IMAGE,
    payload: {
      author: newImage.original_filename,
      uploadImage_url: newImage.secure_url
    }
  };
};

export const getAllImages = () => {
  return dispatch => {
    Axios.get(types.API_END_POINT).then(allImages => {
      dispatch(getAllImagesSuccess(allImages && allImages.data));
    });
  };
};

export const uploadImage = formData => {
  return dispatch => {
    Axios({
      method: "post",
      url: types.CLOUDINARY_API_END_POINT,
      data: formData
    }).then(response => {
      dispatch(updateNewImage(response.data));
    });
  };
};
