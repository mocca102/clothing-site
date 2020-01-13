import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// persistStore allows the browser to cache our store but it needs configuration
import { persistStore, persistReducer } from 'redux-persist';

// defaults to localStorage for web
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import rootSaga from './root-saga';

// we need to persist our reducer as well
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
  // what do you want to persist out of the reducers
  whitelist: ['cart'],
};

// persisting the reducer and passing the configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// PERSIST your store, saving in local storage
export const store = createStore(persistedReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// REHYDRATE, giving the data back on refresh or reloasd
export const persistor = persistStore(store);
