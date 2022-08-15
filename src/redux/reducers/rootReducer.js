import { combineReducers } from "redux";
import fetchMovieReducer from "./movieReducer";
import fetchPlayReducer from "./playReducer";
import fetchSeriesReducer from "./seriesReducer";
import fetchTrailerReducer from "./trailerReducer";
import fetchTvTrailerReducer from "./seriesTrailerReducer";

const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  trailers: fetchTrailerReducer,
  playData: fetchPlayReducer,
  series: fetchSeriesReducer,
  tvTrailers: fetchTvTrailerReducer,
});

export default rootReducer;
