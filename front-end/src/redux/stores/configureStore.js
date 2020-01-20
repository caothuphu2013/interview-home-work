import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig } from '../../services/persist';

import reducers from '../reducers';
import sagas from '../sagas';

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  const middleware = [sagaMiddleware, logger];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(...middleware));
  const withPersistReducer = persistReducer(rootPersistConfig, reducers);

  const store = createStore(withPersistReducer, enhancers);
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  // Make reducers hot reload-able, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(reducers(store.injectedReducers));
      store.dispatch({ type: '@@REDUCER_INJECTED' });
    });
  }

  return { store, persistor };
}
