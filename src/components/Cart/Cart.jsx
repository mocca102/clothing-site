/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCart } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import CartContainer from './Cart.styles';

const Cart = ({ toggleCart, itemsCount }) => (
  <CartContainer
    role="button"
    onClick={toggleCart}
    onKeyDown={(e) => (e.key === 'Enter' ? toggleCart() : null)}
    tabIndex="0"
  >
    <ShoppingIcon />
    <span>{itemsCount}</span>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCart })(Cart);
