import { combineReducers } from "redux";
import fetchMovieReducer from "./movieReducer";
import fetchTrailerReducer from "./trailerReducer";
import fetchPlayReducer from "./playReducer";

const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  trailers: fetchTrailerReducer,
  playData: fetchPlayReducer,
});

export default rootReducer;
