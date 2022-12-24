import axios from "axios";
import apiConfig from "../../config/apiConfig.js"
import {
  SERIES_DETAILS_FETCH_REQUEST,
  SERIES_DETAILS_FETCH_SUCCESS,
  SERIES_DETAILS_FETCH_FAILED,
} from "../../utils/constant";

export const getSeriesDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERIES_DETAILS_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${apiConfig.apiKey}&language=en-US`,
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
