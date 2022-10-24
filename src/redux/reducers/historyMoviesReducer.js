import {
  HISTORY_MOVIE_SUCCESS,
  HISTORY_MOVIE_REQUEST,
  HISTORY_MOVIE_FAILED,
  } from "../../utils/constant";
  
  const fetchHistoryMoviesReducer = (state = { historyMovies: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case HISTORY_MOVIE_REQUEST:
        return {
          ...state,
          isLoading: true,
          historyMovies: [],
        };
      case HISTORY_MOVIE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          historyMovies: payload,
        };
      case HISTORY_MOVIE_FAILED:
        return {
          ...state,
          isLoading: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default fetchHistoryMoviesReducer;
  