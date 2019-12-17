/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import '../PageContainer.scss';
import './ShopPage.scss';
import ShopCollectionsOverView from '../../components/ShopCollectionsOverview/ShopCollectionsOverview';
import Collection from '../collection-page/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import addShopData from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const ShopCollectionsOverViewWithSpinner = WithSpinner(ShopCollectionsOverView);
const CollectionWithSpinner = WithSpinner(Collection);


// nested routes. using :param
// shop page won't be rendered (also its children) unless we access /shop
class ShopPage extends React.Component {
  state = { loading: true }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { addShopData } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        addShopData(collectionsMap);
        this.setState({ loading: false });
        // console.log(collectionsMap);
      },
    );
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="page-container shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <ShopCollectionsOverViewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

export default connect(null, { addShopData })(ShopPage);
