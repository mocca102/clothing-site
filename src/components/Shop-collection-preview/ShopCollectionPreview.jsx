import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import ShopItem from '../Shop-item/ShopItem';
import './ShopCollectionPreview.scss';

const ShopCollectionPreview = ({ items, title, routeName, match }) => {
  const renderItems = () => (
    items.filter((item, i) => i < 4)
      .map(({ id, name, imageUrl, price }) => (
        <ShopItem
          key={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
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
