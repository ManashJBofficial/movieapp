import {
  TRAILER_FETCH_SUCCESS,
  TRAILER_FETCH_REQUEST,
  TRAILER_FETCH_FAILED,
  TRAILER_FETCH_RESET,
} from "../../utils/constant";

const fetchTrailerReducer = (state = { trailer: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRAILER_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        trailer: [],
      };
    case TRAILER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trailer: payload,
      };
    case TRAILER_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case TRAILER_FETCH_RESET:
      return {};
    default:
      return state;
  }
};

const fetchTvTrailerReducer = (state = { trailer: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case TRAILER_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        trailer: [],
      };
    case TRAILER_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        trailer: payload,
      };
    case TRAILER_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case TRAILER_FETCH_RESET:
      return {};
    default:
      return state;
  }
};
export default fetchTrailerReducer;
