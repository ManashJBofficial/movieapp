import axios from "axios";
import {
  SERIES_DETAILS_FETCH_REQUEST,
  SERIES_DETAILS_FETCH_SUCCESS,
  SERIES_DETAILS_FETCH_FAILED,
} from "../../utils/constant";

export const getSeriesDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERIES_DETAILS_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: SERIES_DETAILS_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERIES_DETAILS_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
