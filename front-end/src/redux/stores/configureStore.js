import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducers from "../reducers";
import sagas from "../sagas";
    
export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const middleware = [sagaMiddleware, logger];
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(...middleware));
  
  const store = createStore(reducers, enhancers);
  
  sagaMiddleware.run(sagas);
  
  // Make reducers hot reload-able, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(reducers(store.injectedReducers));
      store.dispatch({ type: "@@REDUCER_INJECTED" });
    });
  } 

  return store;
}