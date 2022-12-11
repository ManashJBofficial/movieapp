import {
  COMEDY_MOVIE_SUCCESS,
  COMEDY_MOVIE_REQUEST,
  COMEDY_MOVIE_FAILED,
  } from "../../utils/constant";
  
  const fetchComedyMoviesReducer = (state = { comedyMovies: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case COMEDY_MOVIE_REQUEST:
        return {
          ...state,
          isLoading: true,
          comedyMovies: [],
        };
      case COMEDY_MOVIE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          comedyMovies: payload,
        };
      case COMEDY_MOVIE_FAILED:
        return {
          ...state,
          isLoading: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default fetchComedyMoviesReducer;
  