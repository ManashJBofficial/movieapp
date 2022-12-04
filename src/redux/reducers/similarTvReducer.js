import {
  SIMILAR_TV_FETCH_REQUEST,
  SIMILAR_TV_FETCH_SUCCESS,
  SIMILAR_TV_FETCH_FAILED,
} from "../../utils/constant";
  
  const fetchSimilarTvReducer = (state = { similarTv: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
      case SIMILAR_TV_FETCH_REQUEST:
        return {
          ...state,
          isLoading: true,
          similarTv: [],
        };
      case SIMILAR_TV_FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          similarTv: payload,
        };
      case SIMILAR_TV_FETCH_FAILED:
        return {
          ...state,
          isLoading: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default fetchSimilarTvReducer;
  