/* eslint-disable react/button-has-type */
import React from 'react';

import CustomBtnContainer from './CustomBtn.styles';

const CustomBtn = ({ children, type, onClick, inverted }) => (
  <CustomBtnContainer onClick={onClick} type={type} inverted={inverted}>
    {children}
  </CustomBtnContainer>
);

export default CustomBtn;
