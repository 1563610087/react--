import { createStore } from "redux";
import cReducer from "./reducer";

const store = createStore(cReducer);

export default store;
