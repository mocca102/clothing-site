
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

export const googleSignInStart = () => ({
  type: 'GOOGLE_SIGN_IN_START',
});

export const emailSignInStart = (email, password) => ({
  type: 'EMAIL_SIGN_IN_START',
  payload: { email, password },
});

export const signInSuccess = (user) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: user,
});

export const signInFailure = (error) => ({
  type: 'SIGN_IN_FAILURE',
  payload: error,
});

export const checkUserSession = () => ({
  type: 'CHECK_USER_SESSION',
});
