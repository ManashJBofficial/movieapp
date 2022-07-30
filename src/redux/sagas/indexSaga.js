import { all } from "redux-saga/effects";
import rootMovies from "./movieSaga";

export default function* indexSaga() {
  yield all([rootMovies()]);
}
