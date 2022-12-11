import {
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
  MOVIE_FETCH_FAILED,
} from "../../utils/constant";

const fetchMovieReducer = (state = { movies: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case MOVIE_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        movies: [],
      };
    case MOVIE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload,
      };
    case MOVIE_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default fetchMovieReducer;
