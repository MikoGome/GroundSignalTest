import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";

const reducers = combineReducers({
  search: searchReducer,
  modal: modalReducer
});

export default reducers;