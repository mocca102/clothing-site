import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchShopDataSuccess = (collections) => ({
  type: 'SHOP_DATA_SUCCESS',
  payload: collections,
});

export const fetchShopDataFailure = (errorMessage) => ({
  type: 'SHOP_DATA_FAILURE',
  payload: errorMessage,
});

export const fetchShopDataStart = () => ({
  type: 'FETCH_SHOP_DATA_START',
});

// export const fetchShopData = () => (dispatch) => {
//   const collectionRef = firestore.collection('collections');

//   collectionRef
//     .get()
//     .then((snapshot) => {
//       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//       // dispatch an action
//       dispatch(fetchShopDataSuccess(collectionsMap));
//       // console.log(collectionsMap);
//     })
//     .catch((error) => dispatch(fetchShopDataFailure(error.message)));
// };
