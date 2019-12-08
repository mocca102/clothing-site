import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalCash } from '../../redux/cart/cart.selectors';

import { addItem } from '../../redux/cart/cart.actions';

import './ItemsTable.scss';

import TableItem from '../TableItem/TableItem';

const ItemsTable = ({ cartItems, totalCash }) => (
  <table className="items-table">
    <thead>
      <tr className="items-table__header">
        <th>Product</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Remove</th>
      </tr>
    </thead>

    <tbody>
      {cartItems.map((item) => <TableItem key={item.id} item={item} />)}
    </tbody>
    <tfoot className="items-table__footer">
      <tr>
        <th colSpan="2">Total Cash:</th>
        <td colSpan="">{`$${totalCash}`}</td>
      </tr>
    </tfoot>
  </table>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalCash: selectTotalCash,
});

export default connect(mapStateToProps, { addItem })(ItemsTable);
