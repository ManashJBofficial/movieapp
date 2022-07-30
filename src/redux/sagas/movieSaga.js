import { put, takeLatest, all, call } from "redux-saga/effects";
import axios from "axios";
import { apiConfig } from "../../config/apiConfig";
import {
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
  MOVIE_FETCH_FAILED,
} from "../../utils/constant";

const getApidata = async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=d3942c0c75b4219ea9c62d5b34471101&page=1`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response;
};

function* fetchMovies({}) {
  try {
    const response = yield getApidata();
    yield put({ type: MOVIE_FETCH_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: MOVIE_FETCH_FAILED, payload: error.response });
  }
}

export default function* rootMovies() {
  yield all([takeLatest(MOVIE_FETCH_REQUEST, fetchMovies)]);
}
