import { all, call } from 'redux-saga/effects';
import { fetchShopDataSagaHelper } from './shop/shop.sagas';
import userSagas from './user/user.sagas';

// (all) makes them sagas run concurrently without blocking the thread
export default function* rootSaga() {
  yield all([
    call(fetchShopDataSagaHelper),
    call(userSagas),
  ]);
}
