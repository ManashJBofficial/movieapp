import axios from "axios";
import {
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
  MOVIE_FETCH_FAILED,
} from "../../utils/constant";

export const getApidata = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=d3942c0c75b4219ea9c62d5b34471101&page=1`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: MOVIE_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
