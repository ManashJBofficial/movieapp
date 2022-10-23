import axios from "axios";
import {
    MOVIE_BY_GENRE_SUCCESS,
    MOVIE_BY_GENRE_REQUEST,
    MOVIE_BY_GENRE_FAILED,
  } from "../../utils/constant";

export const getMovieByGenre = () => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_BY_GENRE_REQUEST });

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=d3942c0c75b4219ea9c62d5b34471101&with_genres=28`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    dispatch({
      type: MOVIE_BY_GENRE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_BY_GENRE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
