const initialState = {
    isAuthenticated: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isAuthenticated: true,
        error: null,
        ...action.data,
      };
    case 'LOGIN_FAILURE':
      return {
        isAuthenticated: false,
        error: action.payload.error,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.data,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;