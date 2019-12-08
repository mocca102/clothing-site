import React from 'react';
import { connect } from 'react-redux';

import './TableItem.scss';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

const TableItem = ({ item, dispatch }) => {
  const { imageUrl, name, price, quantity } = item;

  return (
    <tr className="table-item">
      <td>
        <img className="table-img" src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <div>
          <button
            type="button"
            className="quantity-btn"
            onClick={() => dispatch(removeItem(item))}
          >
            ❬
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            className="quantity-btn"
            onClick={() => dispatch(addItem(item))}
          >
            ❭
          </button>
        </div>
      </td>
      <td>{`$${price}`}</td>
      <td>
        <button
          type="button"
          className="delete-btn"
          onClick={() => dispatch(clearItem(item))}
        >
          ✕
        </button>
      </td>
    </tr>
  );
};

export default connect(null)(TableItem);
