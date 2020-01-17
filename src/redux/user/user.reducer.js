const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case 'SIGN_IN_FAILURE':
    case 'SIGN_OUT_FAILURE':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'SIGN_OUT_SUCCESS':
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};
