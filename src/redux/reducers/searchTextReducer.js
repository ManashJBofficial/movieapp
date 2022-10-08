import { SET_SEARCH_INPUT, GET_SEARCH_INPUT } from "../../utils/constant";

const searchTextReducer = (state = { searchInput: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload,
      };
    case GET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: payload,
      };
    default:
      return state;
  }
};

export default searchTextReducer;
