import { createSelector } from 'reselect';

const userselector = (state) => state.user;

export const selectCurrentUser = createSelector(
  [userselector],
  (user) => user.currentUser,
);
