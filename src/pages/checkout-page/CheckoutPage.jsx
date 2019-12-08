import React from 'react';

import './CheckoutPage.scss';

import ItemsTable from '../../components/ItemsTable/ItemsTable';

const CheckoutPage = () => (
  <div className="checkout-page">
    <ItemsTable />
  </div>
);

export default CheckoutPage;
