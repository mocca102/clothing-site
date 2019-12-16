import { createSelector } from 'reselect';

const selectShopData = (state) => state.shopData;

export const selectShopDataCollections = createSelector(
  [selectShopData],
  (shopData) => shopData.collections,
);

export const selectShopDataCollectionsAsArray = createSelector(
  [selectShopDataCollections],
  (collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : null),
);

export const selectCollection = (urlParamsId) => createSelector(
  [selectShopDataCollections],
  (collections) => collections[urlParamsId],
);
