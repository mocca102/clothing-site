/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, NavContainer } from './Header.styles';

import Cart from '../Cart/Cart';
import CartDropdown from '../CartDropdown/CartDropdown';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const renderSignInOrOut = (currentUser, signOutStart) => (
  currentUser ? (
    <li
      style={{ marginRight: '1.5rem' }}
      onClick={() => {
        signOutStart();
      }}
    >
      SIGN OUT
    </li>
  ) : (
    <Link to="/signin"><li>SIGN IN</li></Link>
  )
);


const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <Link to="/">
      <Logo>logo</Logo>
    </Link>
    <NavContainer>
      <Link to="/shop"><li>SHOP</li></Link>
      {/* <Link to="/" className="header__nav-item"><li>CONTACT</li></Link> */}
      {renderSignInOrOut(currentUser, signOutStart)}
    </NavContainer>
    <Cart />
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, { signOutStart })(Header);
