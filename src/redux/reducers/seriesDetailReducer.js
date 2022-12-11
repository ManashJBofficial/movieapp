import {
  SERIES_DETAILS_FETCH_REQUEST,
  SERIES_DETAILS_FETCH_SUCCESS,
  SERIES_DETAILS_FETCH_FAILED,
} from "../../utils/constant";

const fetchSeriesDetailsReducer = (
  state = { singleSeriesDetail: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case SERIES_DETAILS_FETCH_REQUEST:
      return {
        ...state,
        isSeriesDetailLoading: true,
        singleSeriesDetail: [],
      };
    case SERIES_DETAILS_FETCH_SUCCESS:
      return {
        ...state,
        isSeriesDetailLoading: false,
        singleSeriesDetail: payload,
      };
    case SERIES_DETAILS_FETCH_FAILED:
      return {
        ...state,
        isSeriesDetailLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default fetchSeriesDetailsReducer;
