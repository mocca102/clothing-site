import React from 'react';

import CheckoutPageContainer from './CheckoutPage.styles';
import ItemsTable from '../../components/ItemsTable/ItemsTable';

const CheckoutPage = () => (
  <CheckoutPageContainer>
    <ItemsTable />
  </CheckoutPageContainer>
);

export default CheckoutPage;
