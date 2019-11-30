/* eslint-disable react/button-has-type */
import React from 'react';

import './CustomBtn.scss';

const CustomBtn = ({ children, type, signInWithGoogle }) => (
  <button
    onClick={signInWithGoogle}
    type={type}
    className="custom-btn"
  >
    {children}
  </button>
);

export default CustomBtn;
