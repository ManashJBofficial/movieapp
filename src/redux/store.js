import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = configureStore(
  {
    reducer: { rootReducer },
    middleware: [thunk],
  },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
