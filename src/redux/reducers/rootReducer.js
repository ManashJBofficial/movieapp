import { combineReducers } from "redux";
import fetchMovieReducer from "./movieReducer";
import fetchPlayReducer from "./playReducer";
import fetchSeriesReducer from "./seriesReducer";
import fetchTrailerReducer from "./trailerReducer";
import fetchTvTrailerReducer from "./seriesTrailerReducer";
import fetchSeriesDetailsReducer from "./seriesDetailReducer";

const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  trailers: fetchTrailerReducer,
  playData: fetchPlayReducer,
  series: fetchSeriesReducer,
  tvTrailers: fetchTvTrailerReducer,
  seriesDetail: fetchSeriesDetailsReducer,
});

export default rootReducer;
