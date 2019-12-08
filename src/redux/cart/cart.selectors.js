import { createSelector } from 'reselect';

// input selector that gets the whole state and returns a slice of it
const selectCart = (state) => state.cart;


export const selectCartItems = createSelector(
  // Array of input selectors
  [selectCart],
  // A function that returns the wanted value out of the selector
  // Its params is each output of the input selectors in order
  (cart) => cart.cartItems,
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumilator, currItem) => accumilator + currItem.quantity,
    0,
  ),
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

export const selectTotalCash = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce(
    (accumilator, currItem) => accumilator + currItem.quantity * currItem.price,
    0,
  ),
);
