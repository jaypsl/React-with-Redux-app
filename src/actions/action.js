import * as types from '../constants/constants';
import Axios from 'axios';

export const getAllImagesSuccess = (allImages) => {
  return {
    type: types.GET_ALL_IMAGES_SUCCESS,
    allImages
  };
};

export const updateNewImage = (newImage) => {
  return {
    type: types.UPDATE_STATE_WITH_NEW_IMAGE,
    newImage
  };
};

export const getAllImages = () => {
  return (dispatch) => {
    Axios.get(types.API_END_POINT)
    .then(function(allImages){ 
      dispatch(getAllImagesSuccess(allImages && allImages.data));
    });
  };
};

export const uploadImage = (imageData) => {
  return (dispatch) => {
    Axios({
      method: 'post',
      url: `${types.LOCAL_API_END_POINT}/file_upload`,
      data: imageData,
    })
    .then(response => {    
      dispatch(updateNewImage(response.data.imageRes));
  })
}
}
