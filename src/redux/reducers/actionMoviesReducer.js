import {
  ACTION_MOVIE_SUCCESS,
  ACTION_MOVIE_REQUEST,
  ACTION_MOVIE_FAILED,
  } from "../../utils/constant";
  
  const fetchActionMoviesReducer = (state = { actionMovies: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case ACTION_MOVIE_REQUEST:
        return {
          ...state,
          isLoading: true,
          actionMovies: [],
        };
      case ACTION_MOVIE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          actionMovies: payload,
        };
      case ACTION_MOVIE_FAILED:
        return {
          ...state,
          isLoading: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default fetchActionMoviesReducer;
  