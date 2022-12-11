import axios from "axios";
import {
  SEARCH_QUERY_FETCH_REQUEST,
  SEARCH_QUERY_FETCH_SUCCESS,
  SEARCH_QUERY_FETCH_FAILED,
  SEARCH_QUERY_FETCH_RESET,
} from "../../utils/constant";

export const getSearchResult = (searchInput) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_QUERY_FETCH_REQUEST });
    console.log("in action", searchInput);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=d3942c0c75b4219ea9c62d5b34471101&language=en-US&query=${searchInput}&page=1`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    dispatch({
      type: SEARCH_QUERY_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_QUERY_FETCH_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const resetSearchQuery = () => async (dispatch) => {
  dispatch({ type: SEARCH_QUERY_FETCH_RESET });
};
