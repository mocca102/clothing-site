export const toggleCart = () => ({
  type: 'TOGGLE_CART',
});

export const emptyCart = () => ({
  type: 'EMPTY_CART',
});

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const removeItem = (item) => ({
  type: 'REMOVE_ITEM',
  payload: item,
});

export const clearItem = (item) => ({
  type: 'CLEAR_ITEM',
  payload: item,
});
