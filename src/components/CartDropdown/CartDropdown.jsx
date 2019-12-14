/* eslint-disable no-shadow */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CartDropdownContainer, CartDropdownItems } from './CartDropdown.styles';

import CartItem from '../CartItem/CartItem';
import CustomBtn from '../CustomBtn/CustomBtn';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

const renderItems = (items) => (
  items.length
    ? items.map((item) => <CartItem item={item} key={item.id} />)
    : <span>Your cart is empty</span>
);

const goToCheckoutPage = (history, toggleCart) => {
  history.push('/checkout');
  toggleCart();
};

const CartDropdown = ({ cartItems, history, toggleCart }) => (
  <CartDropdownContainer>
    <CartDropdownItems>
      {renderItems(cartItems)}
    </CartDropdownItems>
    <CustomBtn onClick={() => goToCheckoutPage(history, toggleCart)}>
      GO TO CHECKOUT
    </CustomBtn>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, { toggleCart })(CartDropdown));
