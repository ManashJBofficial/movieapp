import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/indexSaga";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const saga = createSagaMiddleware();

export const store = configureStore(
  {
    reducer: { rootReducer },
    middleware: [saga],
  },
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;
