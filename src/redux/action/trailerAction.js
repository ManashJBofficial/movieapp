import axios from "axios";
import {
  TRAILER_FETCH_SUCCESS,
  TRAILER_FETCH_REQUEST,
  TRAILER_FETCH_FAILED,
  TRAILER_FETCH_RESET,
} from "../../utils/constant";

export const getTrailerdata = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: TRAILER_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: TRAILER_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRAILER_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
