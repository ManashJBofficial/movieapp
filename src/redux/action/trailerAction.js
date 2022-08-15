import axios from "axios";
import {
  TRAILER_FETCH_SUCCESS,
  TRAILER_FETCH_REQUEST,
  TRAILER_FETCH_FAILED,
  TRAILER_FETCH_RESET,
  TV_TRAILER_FETCH_SUCCESS,
  TV_TRAILER_FETCH_REQUEST,
  TV_TRAILER_FETCH_FAILED,
  TV_TRAILER_FETCH_RESET,
} from "../../utils/constant";

export const resetTrailerId = () => async (dispatch) => {
  dispatch({ type: TRAILER_FETCH_RESET });
};
export const resetTvTrailerId = () => async (dispatch) => {
  dispatch({ type: TV_TRAILER_FETCH_RESET });
};

export const getTrailerdata = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: TRAILER_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US`,
      {
        headers: { "Content-Type": "application/json" },
        maxContentLength: 100000000,
        maxBodyLength: 1000000000,
      }
    );

    var trailerObject = data.results.find((list) => list.type === "Trailer");
    var trailerId = trailerObject?.key;

    dispatch({
      type: TRAILER_FETCH_SUCCESS,
      payload: trailerId,
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

export const getTvTrailerdata = (movieId) => async (dispatch) => {
  try {
    dispatch({ type: TV_TRAILER_FETCH_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US`,
      {
        headers: { "Content-Type": "application/json" },
        maxContentLength: 100000000,
        maxBodyLength: 1000000000,
      }
    );
    // console.log("data", data);
    // var trailerDates = data.results.map((list) => list.published_at);
    // ✅ Get Max date
    // const maxDate = new Date(
    //   Math.max(
    //     ...trailerDates.map((element) => {
    //       return new Date(element);
    //     })
    //   )
    // );

    // var latestTrailer = Math.max(...trailerDates);
    // console.log(latestTrailer);
    var trailerObject = data.results.find((list) => list.type === "Trailer");
    var trailerId = trailerObject?.key;

    dispatch({
      type: TV_TRAILER_FETCH_SUCCESS,
      payload: trailerId,
    });
  } catch (error) {
    dispatch({
      type: TV_TRAILER_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
