import axios from "axios";
import apiConfig from "../../config/apiConfig.js"
import {
  COMEDY_MOVIE_SUCCESS,
  COMEDY_MOVIE_REQUEST,
  COMEDY_MOVIE_FAILED,
  } from "../../utils/constant";

export const getComedyMovies = (genreId) => async (dispatch) => {
  try {
    dispatch({ type: COMEDY_MOVIE_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiConfig.apiKey}&with_genres=${genreId}`,
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
