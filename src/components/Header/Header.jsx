/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';
import Cart from '../Cart/Cart';
import CartDropdown from '../Cart-dropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const renderSignInOrOut = (currentUser) => (
  currentUser ? (
    <li
      onClick={() => {
        auth.signOut();
      }}
      className="header__nav-item"
    >
      SIGN OUT
    </li>
  ) : (
    <Link to="/signin"><li className="header__nav-item">SIGN IN</li></Link>
  )
);


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/"><Logo className="header__logo">logo</Logo></Link>
    <ul className="header__nav">
      <Link to="/shop"><li className="header__nav-item">SHOP</li></Link>
      <Link to="/shop"><li className="header__nav-item">CONTACT</li></Link>
      {renderSignInOrOut(currentUser)}
      <li className="header__nav-item"><Cart /></li>
    </ul>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
