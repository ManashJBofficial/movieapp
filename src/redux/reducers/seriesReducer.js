import {
  SERIES_FETCH_REQUEST,
  SERIES_FETCH_SUCCESS,
  SERIES_FETCH_FAILED,
} from "../../utils/constant";

const fetchSeriesReducer = (state = { series: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SERIES_FETCH_REQUEST:
      return {
        ...state,
        isSeriesLoading: true,
        series: [],
      };
    case SERIES_FETCH_SUCCESS:
      return {
        ...state,
        isSeriesLoading: false,
        series: payload,
      };
    case SERIES_FETCH_FAILED:
      return {
        ...state,
        isSeriesLoading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default fetchSeriesReducer;
