import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";
import mapReducer from "./mapReducer";

const reducers = combineReducers({
  search: searchReducer,
  modal: modalReducer,
  map: mapReducer
});

export default reducers;