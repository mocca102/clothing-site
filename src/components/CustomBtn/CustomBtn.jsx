import React from 'react';

import './CustomBtn.scss';

const CustomBtn = ({ children, type }) => (
  <button type={type} className="custom-btn">{children}</button>
)

export default CustomBtn;