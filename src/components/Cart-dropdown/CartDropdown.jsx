import React from 'react';

import './CartDropdown.scss';

import CustomBtn from '../CustomBtn/CustomBtn';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">items</div>
    <CustomBtn>GO TO CHECKOUT </CustomBtn>
  </div>
);

export default CartDropdown;
