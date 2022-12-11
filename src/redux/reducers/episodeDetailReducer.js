import {
  EPISODE_DETAILS_FETCH_REQUEST,
  EPISODE_DETAILS_FETCH_SUCCESS,
  EPISODE_DETAILS_FETCH_FAILED,
} from "../../utils/constant";

const fetchEpisodeDetailsReducer = (
  state = { singleEpisodeDetail: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case EPISODE_DETAILS_FETCH_REQUEST:
      return {
        ...state,
        isEpDetailLoading: true,
        singleEpisodeDetail: [],
      };
    case EPISODE_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        isEpDetailLoading: false,
        singleEpisodeDetail: payload,
      };
    case EPISODE_DETAILS_FETCH_FAILED:
      return {
        ...state,
        isEpDetailLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default fetchEpisodeDetailsReducer;
