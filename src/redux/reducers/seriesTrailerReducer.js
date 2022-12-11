import {
  TV_TRAILER_FETCH_REQUEST,
  TV_TRAILER_FETCH_SUCCESS,
  TV_TRAILER_FETCH_FAILED,
  TV_TRAILER_FETCH_RESET,
} from "../../utils/constant";

const fetchTvTrailerReducer = (state = { tvTrailer: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TV_TRAILER_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        tvTrailer: [],
      };
    case TV_TRAILER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tvTrailer: payload,
      };
    case TV_TRAILER_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case TV_TRAILER_FETCH_RESET:
      return {};
    default:
      return state;
  }
};
export default fetchTvTrailerReducer;
