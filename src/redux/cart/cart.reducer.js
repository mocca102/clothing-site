const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        hidden: !state.hidden,
      };
    case 'ADD_ITEM':
      /* if the cart item already exists, return the same array of items, if not,
       you increment the quantity of the added item. but you can't directly mutate
      the object or use shadow variables according to redux's immutable update 
      patterns thus using map since it returns a new array */
      if (state.cartItems.find((e) => e.id === action.payload.id)) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map(
              (item) => ((item.id === action.payload.id)
                ? ({ ...item, quantity: item.quantity + 1 })
                : (item)),
            ),
          ],
        };
      }
      // item doesn't exist? add it
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    default:
      return state;
  }
};

export default cartReducer;
