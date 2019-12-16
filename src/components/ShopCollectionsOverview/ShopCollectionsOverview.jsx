import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopDataCollectionsAsArray } from '../../redux/shop/shop.selectors';


import './ShopCollectionsOverview.scss';
import ShopCollectionPreview from '../ShopCollectionPreview/ShopCollectionPreview';

const ShopCollectionsOverview = ({ collections }) => {
  if (collections) {
    return (
      collections.map(({ id, items, title, routeName }) => (
        <ShopCollectionPreview
          key={id}
          items={items}
          title={title}
          routeName={routeName}
        />
      ))
    );
  }
  return 'loading';
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataCollectionsAsArray,
});

export default connect(mapStateToProps)(ShopCollectionsOverview);
