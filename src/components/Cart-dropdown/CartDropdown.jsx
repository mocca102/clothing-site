import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.scss';

import CartItem from '../CartItem/CartItem';
import CustomBtn from '../CustomBtn/CustomBtn';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {cartItems.map((item) => <CartItem item={item} key={item.id} />)}
    </div>
    <CustomBtn>GO TO CHECKOUT </CustomBtn>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
