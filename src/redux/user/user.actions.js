
export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

export const googleSignInStart = () => ({
  type: 'GOOGLE_SIGN_IN_START',
});

export const emailSignInStart = (emailAndPass) => ({
  type: 'EMAIL_SIGN_IN_START',
  payload: emailAndPass,
});

export const signInSuccess = (user) => ({
  type: 'SIGN_IN_SUCCESS',
  payload: user,
});

export const signInFailure = (error) => ({
  type: 'SIGN_IN_FAILURE',
  payload: error,
});
