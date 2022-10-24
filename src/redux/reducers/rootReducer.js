import { combineReducers } from "redux";
import fetchMovieReducer from "./movieReducer";
import fetchPlayReducer from "./playReducer";
import fetchSeriesReducer from "./seriesReducer";
import fetchTrailerReducer from "./trailerReducer";
import fetchTvTrailerReducer from "./seriesTrailerReducer";
import fetchSeriesDetailsReducer from "./seriesDetailReducer";
import fetchEpisodeDetailsReducer from "./episodeDetailReducer";
import searchTextReducer from "./searchTextReducer";
import fetchSearchResultReducer from "./searchQueryReducer";
import fetchActionMoviesReducer from "./actionMoviesReducer";
import fetchComedyMoviesReducer from "./comedyMoviesReducer";
import fetchHistoryMoviesReducer from "./historyMoviesReducer";

const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  trailers: fetchTrailerReducer,
  playData: fetchPlayReducer,
  series: fetchSeriesReducer,
  tvTrailers: fetchTvTrailerReducer,
  seriesDetail: fetchSeriesDetailsReducer,
  episodeDetail: fetchEpisodeDetailsReducer,
  searchTextInput: searchTextReducer,
  searchResultReducer: fetchSearchResultReducer,
  actionMoviesReducer:fetchActionMoviesReducer,
  comedyMoviesReducer:fetchComedyMoviesReducer,
  historyMoviesReducer:fetchHistoryMoviesReducer,
});

export default rootReducer;
