import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import '../PageContainer.scss';
import './ShopPage.scss';
import ShopCollectionsOverView from '../../components/ShopCollectionsOverview/ShopCollectionsOverview';
import Collection from '../collection-page/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import addShopData from '../../redux/shop/shop.actions';

// nested routes. using :param
// shop page won't be rendered (also its children) unless we access /shop
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { addShopData } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        addShopData(collectionsMap);
        console.log(collectionsMap);
      },
    );
  }

  render() {
    const { match } = this.props;
    return (
      <div className="page-container shop-page">
        <Route exact path={`${match.path}`} component={ShopCollectionsOverView} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

export default connect(null, { addShopData })(ShopPage);
