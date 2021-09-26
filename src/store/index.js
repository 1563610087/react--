import { createStore, applyMiddleware, compose } from "redux";
import cReducer from "./reducer";
import thunk from "redux-thunk";

// 设置调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
// 设置中间件
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(cReducer, enhancer);

export default store;
