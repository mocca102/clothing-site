import { takeEvery, call, put } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchShopDataSuccess, fetchShopDataFailure } from './shop.actions';

export function* fetchShopData() {
  try {
    const collectionRef = firestore.collection('collections');
    const collectionSnapshot = yield collectionRef.get();
    yield console.log(' saga fired ');
    yield console.log(collectionSnapshot);
    const collectionsMap = convertCollectionsSnapshotToMap(collectionSnapshot);
    yield put(fetchShopDataSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchShopDataFailure(error.message));
  }
}

export function* shopSaga() {
  yield takeEvery('FETCH_SHOP_DATA_START', fetchShopData);
}
