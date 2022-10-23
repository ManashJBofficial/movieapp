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
import fetchMovieByGenreReducer from "./moviesByGenreReducer";

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
  movieByGenreReducer:fetchMovieByGenreReducer
});

export default rootReducer;
