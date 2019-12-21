import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionContainer from './Collection.styles';
import CollectionItem from '../../components/ShopCollectionItem/ShopCollectionItem';

const Collection = ({ collection }) => (
  <CollectionContainer>
    <h2>{collection.title}</h2>
    {
      collection
        ? collection.items.map((item) => <CollectionItem key={item.id} item={item} />)
        : 'loading'
    }
  </CollectionContainer>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
