const shopReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOP_DATA':
      return ({
        collections: action.payload,
      });

    default:
      return state;
  }
};

export default shopReducer;
