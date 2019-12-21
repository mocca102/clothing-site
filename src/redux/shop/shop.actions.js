import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const fetchShopDataSuccess = (collections) => ({
  type: 'SHOP_DATA_SUCCESS',
  payload: collections,
});

const fetchShopDataFailure = (errorMessage) => ({
  type: 'SHOP_DATA_FAILURE',
  payload: errorMessage,
});

const fetchShopData = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // dispatch an anction
      dispatch(fetchShopDataSuccess(collectionsMap));
      // console.log(collectionsMap);
    })
    .catch((error) => dispatch(fetchShopDataFailure(error.message)));
};

export default fetchShopData;
