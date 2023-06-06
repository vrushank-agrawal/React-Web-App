const initialState = {
    read: [],
    unread: [],
};

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case 'READ_NOTIFICATIONS':
        return {
            ...state,
            read: [...action.data],
        };
    case 'UNREAD_NOTIFICATIONS':
        return {
            ...state,
            unread: [...action.data],
        };
    case 'LOGOUT':
        return initialState;
    default:
        return state;
    }
}

export default notificationReducer;