import { combineReducers } from "redux";
import markettersReducer from "./markettes/marketters.reducer";
import progressBarReducer from "./progress-bar/progress-bar.reducer";

export default combineReducers({
  markettersReducer: markettersReducer,
  progressBar: progressBarReducer,
});
