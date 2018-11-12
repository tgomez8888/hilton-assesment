import { combineReducers } from "redux";
import { reducer as booking } from "../../booking";

export default combineReducers({
  booking
  // here you can additional reducers from other modules
});
