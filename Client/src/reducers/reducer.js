  
import * as types from '../constants/constants';
const initialState = {
  imageList:[],
};

export default function(state=initialState, action){
  switch(action.type){

    case types.GET_ALL_IMAGES_SUCCESS :{
      return Object.assign({},state,{imageList:action.allImages});
    }
    case types.UPDATE_STATE_WITH_NEW_IMAGE :{
      return Object.assign({},state,{imageList:[...state.imageList, action.newImage]});
    }
    default:
    return state;
  }
};