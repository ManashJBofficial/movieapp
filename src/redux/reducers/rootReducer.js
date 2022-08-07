import { combineReducers } from "redux";
import fetchMovieReducer from "./movieReducer";
import fetchTrailerReducer from "./trailerReducer";

const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  trailers: fetchTrailerReducer,
});

export default rootReducer;
