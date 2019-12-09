import SHOP_DATA from './shop-data';

const INITIAL_STATE = SHOP_DATA;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default shopReducer;
