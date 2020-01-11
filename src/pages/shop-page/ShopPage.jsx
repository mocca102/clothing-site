/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import PageContainer from '../PageContainer.styles';
import ShopCollectionsOverView from '../../components/ShopCollectionsOverview/ShopCollectionsOverview';
import Collection from '../collection-page/Collection';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

import { fetchShopDataStart } from '../../redux/shop/shop.actions';
import { selectIsShopLoading, selectShopDataCollectionsAsArray } from '../../redux/shop/shop.selectors';

const ShopCollectionsOverViewWithSpinner = WithSpinner(ShopCollectionsOverView);
const CollectionWithSpinner = WithSpinner(Collection);


// nested routes. using :param
// shop page won't be rendered (also its children) unless we access /shop
class ShopPage extends React.Component {
  componentDidMount() {
    const { collections } = this.props;
    if (!collections) {
      const { fetchShopDataStart } = this.props;
      fetchShopDataStart();
    }
  }

  render() {
    const { match, loading } = this.props;
    return (
      <PageContainer>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <ShopCollectionsOverViewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}
        />
      </PageContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectIsShopLoading,
  collections: selectShopDataCollectionsAsArray,
});

export default connect(mapStateToProps, { fetchShopDataStart })(ShopPage);
