// @flow

import { createStore, applyMiddleware, compose } from "redux";
// Can't get redux dev tools working
// import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import thunkMiddleware from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from "redux-logger";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";

import type { State } from "./types";

import rootReducer from "./reducers";

const configureStore = (initialState?: State) => {
  const isServer = typeof window === "undefined";
  let middleware = [thunkMiddleware];

  if (process.env.NODE_ENV !== "production" && !isServer) {
    middleware = [...middleware, logger];
  }

  const enhancer = compose(
    ...[
      applyMiddleware(...middleware),
      // Don't want redux-offline on the server-side
      isServer ? undefined : offline(offlineConfig)
    ].filter(Boolean)
  );

  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
