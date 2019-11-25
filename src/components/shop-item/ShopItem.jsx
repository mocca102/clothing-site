import React from 'react';
import './ShopItem.scss';

const ShopItem = ({ name, imageUrl, price }) => (
  <div className="shop-item">
    <div
      className="shop-item__bgImage"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="shop-item__footer">
      <p>{name}</p>
      <span>{price}</span>
    </div>
  </div>
);

export default ShopItem;
