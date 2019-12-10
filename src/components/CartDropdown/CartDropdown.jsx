/* eslint-disable no-shadow */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.scss';

import CartItem from '../CartItem/CartItem';
import CustomBtn from '../CustomBtn/CustomBtn';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCart } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, toggleCart }) => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items">
      {
        cartItems.length
          ? cartItems.map((item) => <CartItem item={item} key={item.id} />)
          : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomBtn onClick={() => {
      history.push('/checkout');
      toggleCart();
    }}
    >
      GO TO CHECKOUT
    </CustomBtn>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps, { toggleCart })(CartDropdown));
