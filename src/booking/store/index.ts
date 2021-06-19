import { combineReducers } from "redux";
import bookingReducer from "booking/store/slices/booking-slice";

export default combineReducers({
  list: bookingReducer,
});
