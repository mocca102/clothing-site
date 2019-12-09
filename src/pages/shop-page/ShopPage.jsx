import React from 'react';
import { Route } from 'react-router-dom';

import '../PageContainer.scss';
import './ShopPage.scss';
import ShopCollectionsOverView from '../../components/ShopCollectionsOverview/ShopCollectionsOverview';
import Collection from '../collection-page/Collection';

// nested routes. using :param
// shop page won't be rendered (also its children) unless we access /shop
const ShopPage = ({ match }) => (
  <div className="page-container shop-page">
    <Route exact path={`${match.path}`} component={ShopCollectionsOverView} />
    <Route path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
