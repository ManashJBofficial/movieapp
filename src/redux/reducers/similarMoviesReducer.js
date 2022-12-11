import {
    SIMILAR_MOVIE_FETCH_REQUEST,
    SIMILAR_MOVIE_FETCH_SUCCESS,
    SIMILAR_MOVIE_FETCH_FAILED,
  } from "../../utils/constant";
  
  const fetchSimilarMovieReducer = (state = { similarMovies: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case SIMILAR_MOVIE_FETCH_REQUEST:
        return {
          ...state,
          isLoading: true,
          similarMovies: [],
        };
      case SIMILAR_MOVIE_FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          similarMovies: payload,
        };
      case SIMILAR_MOVIE_FETCH_FAILED:
        return {
          ...state,
          isLoading: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default fetchSimilarMovieReducer;
  