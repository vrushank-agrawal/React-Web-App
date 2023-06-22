const initialState = {
    brands: [],
};

const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BRANDS':
        return {
            ...state,
            brands: action.data,
        };
        case 'GET_MODELS':
        return {
            ...state,
            models: action.data,
        };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export default brandsReducer;