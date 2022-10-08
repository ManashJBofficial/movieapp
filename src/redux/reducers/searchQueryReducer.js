import {
  SEARCH_QUERY_FETCH_REQUEST,
  SEARCH_QUERY_FETCH_SUCCESS,
  SEARCH_QUERY_FETCH_FAILED,
  SEARCH_QUERY_FETCH_RESET,
} from "../../utils/constant";

const fetchSearchResultReducer = (state = { searchResult: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_QUERY_FETCH_REQUEST:
      return {
        ...state,
        isSearchResultLoading: true,
        searchResult: [],
      };
    case SEARCH_QUERY_FETCH_SUCCESS:
      return {
        ...state,
        isSearchResultLoading: false,
        searchResult: payload,
      };
    case SEARCH_QUERY_FETCH_FAILED:
      return {
        ...state,
        isSearchResultLoading: false,
        errors: payload,
      };
    case SEARCH_QUERY_FETCH_RESET:
      return {};
    default:
      return state;
  }
};

export default fetchSearchResultReducer;
