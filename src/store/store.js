import { createStore, applyMiddleware, compose } from "redux";
import homeReducers from "./homeReducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  homeReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
