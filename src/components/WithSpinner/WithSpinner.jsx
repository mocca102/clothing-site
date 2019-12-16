/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import WithSpinnerContainer from './WithSpinner.styles';
import PageContainer from '../../pages/PageContainer.styles';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => (
  isLoading
    ? (
      <PageContainer>
        <WithSpinnerContainer />
      </PageContainer>
    )
    : (<WrappedComponent {...otherProps} />)
);

export default WithSpinner;
