import React from 'react';

import './CartItem.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img className="cart-item__img" src={imageUrl} alt="" />
    <div className="cart-item__details">
      <span>{name}</span>
      <span>{`$${price} x ${quantity || ''}`}</span>
    </div>
  </div>
);

export default CartItem;
