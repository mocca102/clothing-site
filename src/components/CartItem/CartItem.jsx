import React from 'react';

import CartItemContainer from './CartItem.styles';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="" />
    <div>
      <span>{name}</span>
      <span>{`$${price} x ${quantity || ''}`}</span>
    </div>
  </CartItemContainer>
);

export default CartItem;
