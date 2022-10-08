import { SET_SEARCH_INPUT, GET_SEARCH_INPUT } from "../../utils/constant";

export const searchTextAction = (searchInput) => async (dispatch) => {
  try {
    dispatch({ type: SET_SEARCH_INPUT });

    dispatch({
      type: GET_SEARCH_INPUT,
      payload: searchInput,
    });
  } catch (error) {
    console.log(error);
  }
};
