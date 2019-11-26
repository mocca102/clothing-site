import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './Header.scss';

const Header = () => (
  <div className="header">
    <Link to="/"><Logo className="header__logo">logo</Logo></Link>
    <ul className="header__nav">
      <Link to="/shop"><li className="header__nav-item">SHOP</li></Link>
      <Link to="/shop"><li className="header__nav-item">CONTACT</li></Link>
      <Link to="/signin"><li className="header__nav-item">SIGN IN</li></Link>
    </ul>
  </div>
);

export default Header;
