import axios from "axios";
import {
  COMEDY_MOVIE_SUCCESS,
  COMEDY_MOVIE_REQUEST,
  COMEDY_MOVIE_FAILED,
  } from "../../utils/constant";

export const getComedyMovies = (genreId) => async (dispatch) => {
  try {
    dispatch({ type: COMEDY_MOVIE_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d3942c0c75b4219ea9c62d5b34471101&with_genres=${genreId}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: COMEDY_MOVIE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMEDY_MOVIE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
