import axios from "axios";
import {
  EPISODE_DETAILS_FETCH_REQUEST,
  EPISODE_DETAILS_FETCH_SUCCESS,
  EPISODE_DETAILS_FETCH_FAILED,
} from "../../utils/constant";

export const getEpisodeDetail = (id, seasonNo) => async (dispatch) => {
  try {
    dispatch({ type: EPISODE_DETAILS_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/season/${seasonNo}?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: EPISODE_DETAILS_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EPISODE_DETAILS_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
