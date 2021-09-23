// import { combineReducers } from "redux-immutable";
//combineReducers引自immutable主要是采用了immutable优化state的处理，不用的话就引用自redux
import { combineReducers } from "redux";
import recommendReducer from "./recommend/reducer";
const cReducer = combineReducers({
  recommendReducer: recommendReducer,
});

export default cReducer;
