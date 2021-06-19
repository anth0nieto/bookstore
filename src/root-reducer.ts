import { combineReducers } from "redux";
import loginReducer from "login/store";
import bookingReducer from "booking/store";

export default combineReducers({
  login: loginReducer,
  books: bookingReducer,
});
