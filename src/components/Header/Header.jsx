/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const renderSignInOrOut = (currentUser, history) => (
  currentUser ? (
    <li
      onClick={() => {
        auth.signOut();
        history.push('/');
      }}
      className="header__nav-item"
    >
      SIGN OUT
    </li>
  ) : (
    <Link to="/signin"><li className="header__nav-item">SIGN IN</li></Link>
  )
);


const Header = ({ currentUser, history }) => (
  <div className="header">
    <Link to="/"><Logo className="header__logo">logo</Logo></Link>
    <ul className="header__nav">
      <Link to="/shop"><li className="header__nav-item">SHOP</li></Link>
      <Link to="/shop"><li className="header__nav-item">CONTACT</li></Link>
      {renderSignInOrOut(currentUser, history)}
    </ul>
  </div>
);

export default withRouter(Header);
