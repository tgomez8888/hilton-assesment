import { combineReducers } from "redux";
import { reducer as booking } from "../../booking";

export const reducer = combineReducers({
  booking
  // here you can additional reducers from other modules
});

export default reducer;
