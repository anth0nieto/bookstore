import { combineReducers } from "redux";
import userReducer from "login/store/slices/user-slice";

export default combineReducers({
  user: userReducer,
});
