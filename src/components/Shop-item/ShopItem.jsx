import React from 'react';
import { connect } from 'react-redux';

import './ShopItem.scss';

import { addItem } from '../../redux/cart/cart.actions';

import CustomBtn from '../CustomBtn/CustomBtn';

const ShopItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="shop-item">
      <div
        className="shop-item__bgImage"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="shop-item__footer">
        <p>{name}</p>
        <span>{`$${price}`}</span>
      </div>
      <CustomBtn onClick={() => addItem(item)} type="button" inverted>ADD TO CART</CustomBtn>
    </div>
  );
};

export default connect(null, { addItem })(ShopItem);
