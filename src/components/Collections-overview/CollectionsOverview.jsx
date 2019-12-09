import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopDataCollections } from '../../redux/shop/shop.selectors';


import './CollectionsOverview.scss';
import ShopCollectionPreview from '../Shop-collection-preview/ShopCollectionPreview';

const CollectionsOverview = ({ collections }) => (
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
  collections: selectShopDataCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
