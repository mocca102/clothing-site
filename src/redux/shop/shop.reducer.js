const INITIAL_STATE = {
  collections: null,
  errorMessage: '',
  loading: true,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOP_DATA':
      return ({
        ...state,
        collections: action.payload,
      });
    case 'SHOP_DATA_SUCCESS':
      return ({
        ...state,
        collections: action.payload,
        loading: !state.loading,
      });
    case 'SHOP_DATA_FAILURE':
      return ({
        ...state,
        errorMessage: action.payload,
      });
    default:
      return state;
  }
};

export default shopReducer;
