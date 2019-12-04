import React from 'react';

import { connect } from 'react-redux';

import './CartDropdown.scss';

import CartItem from '../CartItem/CartItem';
import CustomBtn from '../CustomBtn/CustomBtn';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.map((item) => <CartItem item={item} key={item.id} />)}
    </div>
    <CustomBtn>GO TO CHECKOUT </CustomBtn>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
