import axios from "axios";
import apiConfig from "../../config/apiConfig.js"
import {
  SIMILAR_MOVIE_FETCH_REQUEST,
  SIMILAR_MOVIE_FETCH_SUCCESS,
  SIMILAR_MOVIE_FETCH_FAILED,
} from "../../utils/constant";

export const getSimilarMoviesData = (id) => async (dispatch) => {
  try {
    dispatch({ type: SIMILAR_MOVIE_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: SIMILAR_MOVIE_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIMILAR_MOVIE_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
