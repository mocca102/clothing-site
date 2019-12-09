import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ShopCollectionItem from '../ShopCollectionItem/ShopCollectionItem';
import './ShopCollectionPreview.scss';

const ShopCollectionPreview = ({ items, title, routeName, match }) => {
  const renderItems = () => (
    items.filter((item, i) => i < 4)
      .map((item) => (
        <ShopCollectionItem
          key={item.id}
          item={item}
        />
      ))
  );

  return (
    <div className="shop-collection-preview">
      <Link to={`${match.url}/${routeName}`}>
        <h2 className="shop-collection-preview__title">{title}</h2>
      </Link>
      <div className="shop-collection-preview__items">
        {renderItems()}
      </div>
    </div>
  );
};

export default withRouter(ShopCollectionPreview);
