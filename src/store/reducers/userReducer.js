const initialState = {
    isAuthenticated: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        error: null,
        ...action.data,
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