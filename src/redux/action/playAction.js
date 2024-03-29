import axios from "axios";
import apiConfig from "../../config/apiConfig.js"
import {
  PLAY_FETCH_REQUEST,
  PLAY_FETCH_SUCCESS,
  PLAY_FETCH_FAILED,
} from "../../utils/constant";

export const getPlaydata = () => async (dispatch) => {
  try {
    dispatch({ type: PLAY_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiConfig.apiKey}&language=en-US`
    );

    dispatch({
      type: PLAY_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLAY_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const getTvPlaydata = () => async (dispatch) => {
//   try {
//     dispatch({ type: PLAY_FETCH_REQUEST });

//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/genre/tv/list?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US`
//     );

//     dispatch({
//       type: PLAY_FETCH_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: PLAY_FETCH_FAILED,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
