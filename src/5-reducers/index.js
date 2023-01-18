import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import user from "./user";
import product from "./product";
import music from "./music";
import category from "./category";
import publicReducer from "./public";
import size from "./size";
export default combineReducers({
  auth,
  message,
  user,
  product,
  music,
  category,
  publicReducer,
  size
});