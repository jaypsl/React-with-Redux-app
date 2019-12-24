import { combineReducers } from "redux";
import Reducer from "./reducer";
const appReducer = combineReducers({
  Reducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;