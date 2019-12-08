import { createStore, applyMiddleware } from 'redux';

// persistStore allows the browser to cache our store but it needs configuration
import { persistStore, persistReducer } from 'redux-persist';

// defaults to localStorage for web
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

// we need to persist our reducer as well
import rootReducer from './root-reducer';


const middlewares = [logger];

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

// REHYDRATE, giving the data back on refresh or reloasd
export const persistor = persistStore(store);
