import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
