/* eslint-disable react/button-has-type */
import React from 'react';

import './CustomBtn.scss';

const CustomBtn = ({ children, type, onClick, inverted }) => (
  <button
    onClick={onClick}
    type={type}
    className={`custom-btn ${inverted ? 'inverted' : ''}`}
  >
    {children}
  </button>
);

export default CustomBtn;
