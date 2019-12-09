import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopDataCollectionsAsArray } from '../../redux/shop/shop.selectors';


import './ShopCollectionsOverview.scss';
import ShopCollectionPreview from '../ShopCollectionPreview/ShopCollectionPreview';

const ShopCollectionsOverview = ({ collections }) => (
  collections.map(({ id, items, title, routeName }) => (
    <ShopCollectionPreview
      key={id}
      items={items}
      title={title}
      routeName={routeName}
    />
  ))
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopDataCollectionsAsArray,
});

export default connect(mapStateToProps)(ShopCollectionsOverview);
