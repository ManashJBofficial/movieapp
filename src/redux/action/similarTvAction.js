import axios from "axios";
import {
  SIMILAR_TV_FETCH_REQUEST,
  SIMILAR_TV_FETCH_SUCCESS,
  SIMILAR_TV_FETCH_FAILED,
} from "../../utils/constant";

export const getSimilarTvData = (id) => async (dispatch) => {
  try {
    dispatch({ type: SIMILAR_TV_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/119051/similar?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US&page=1`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: SIMILAR_TV_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIMILAR_TV_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
