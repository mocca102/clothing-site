import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './Collection.scss';
import CollectionItem from '../../components/ShopCollectionItem/ShopCollectionItem';

const Collection = ({ collection }) => (
  <div>
    {collection.items.map((item) => <CollectionItem key={item.id} item={item} />)}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
