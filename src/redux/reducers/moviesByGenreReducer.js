import {
    MOVIE_BY_GENRE_SUCCESS,
    MOVIE_BY_GENRE_REQUEST,
    MOVIE_BY_GENRE_FAILED,
  } from "../../utils/constant";
  
  const fetchMovieByGenreReducer = (state = { moviesByGenre: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case MOVIE_BY_GENRE_REQUEST:
        return {
          ...state,
          isLoading: true,
          moviesByGenre: [],
        };
      case MOVIE_BY_GENRE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          moviesByGenre: payload,
        };
      case MOVIE_BY_GENRE_FAILED:
        return {
          ...state,
          isLoading: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default fetchMovieByGenreReducer;
  