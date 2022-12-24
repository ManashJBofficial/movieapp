import axios from "axios";
import apiConfig from "../../config/apiConfig.js"
import {
  SERIES_FETCH_REQUEST,
  SERIES_FETCH_SUCCESS,
  SERIES_FETCH_FAILED,
} from "../../utils/constant";

export const getSeriesdata = (id) => async (dispatch) => {
  try {
    dispatch({ type: SERIES_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiConfig.apiKey}&page=1`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: SERIES_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SERIES_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
