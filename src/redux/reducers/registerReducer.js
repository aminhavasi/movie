export const usernameRegister = (state = '', action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return action.payload;
        case 'CLEAR_USERNAME':
            return action.payload;
        default:
            return state;
    }
};
export const emailRegister = (state = '', action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return action.payload;
        case 'CLEAR_EMAIL':
            return action.payload;
        default:
            return state;
    }
};
export const passwordRegister = (state = '', action) => {
    switch (action.type) {
        case 'SET_PASSWORD':
            return action.payload;
        case 'CLEAR_PASSWORD':
            return action.payload;
        default:
            return state;
    }
};
