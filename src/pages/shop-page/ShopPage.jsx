import React from 'react';

import '../PageContainer.scss';
import './ShopPage.scss';
import CollectionsOverView from '../../components/Collections-overview/CollectionsOverview';

const ShopPage = () => (
  <div className="page-container shop-page">
    <h1 className="shop-page__title">Collections</h1>
    <CollectionsOverView />
  </div>
);

export default ShopPage;
