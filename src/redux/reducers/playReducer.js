import {
  PLAY_FETCH_REQUEST,
  PLAY_FETCH_SUCCESS,
  PLAY_FETCH_FAILED,
} from "../../utils/constant";

const fetchPlayReducer = (state = { play: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLAY_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        play: [],
      };
    case PLAY_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        play: payload,
      };
    case PLAY_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default fetchPlayReducer;
