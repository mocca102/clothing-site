import { takeLatest, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchShopDataSuccess, fetchShopDataFailure } from './shop.actions';

// Sagas are generators
// Sdie effects crwated with effect commands and yield
export function* fetchShopDataSaga() {
  try {
    const collectionRef = firestore.collection('collections');
    const collectionSnapshot = yield collectionRef.get();
    const collectionsMap = convertCollectionsSnapshotToMap(collectionSnapshot);

    yield put(fetchShopDataSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchShopDataFailure(error.message));
  }
}

// Action type and saga
// Use Saga helper to organize
// gets passed to middleware for execution
export function* fetchShopDataSagaHelper() {
  yield takeLatest('FETCH_SHOP_DATA_START', fetchShopDataSaga);
}
