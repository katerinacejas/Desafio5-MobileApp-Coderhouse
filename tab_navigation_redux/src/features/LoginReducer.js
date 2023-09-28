const initialState = {
    loginHecho: false,
};

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return { ...state, loginHecho: action.payload };
        default:
            return state;
    }
};

export default LoginReducer;