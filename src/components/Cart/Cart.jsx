import React from 'react';
import { connect } from 'react-redux';

import { toggleCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './Cart.scss';

const Cart = ({ toggleCart }) => (
  <div className="cart" onClick={toggleCart}>
    <ShoppingIcon className="cart__logo" />
    <span className="cart__number">0</span>
  </div>
);

export default connect(null, { toggleCart })(Cart);
