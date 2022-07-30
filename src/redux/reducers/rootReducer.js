import { combineReducers } from "redux";
import fetchMovieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movies: fetchMovieReducer,
});

export default rootReducer;
