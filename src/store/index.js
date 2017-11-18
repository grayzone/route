import { applyMiddleware, createStore, compose } from "redux";
import reducer from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;