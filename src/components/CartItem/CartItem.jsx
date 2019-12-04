import React from 'react';

import './CartItem.scss';

const CartItem = ({ item: { name, price, imageUrl } }) => (
  <div className="cart-item">
    <img className="cart-item__img" src={imageUrl} alt="" />
    <div className="cart-item__details">
      <span>{name}</span>
      <span>{`$${price}`}</span>
    </div>
  </div>
);

export default CartItem;
