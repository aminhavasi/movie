export const emailLogin = (state = '', action) => {
    switch (action.type) {
        case 'SET_EMAIL_LOGIN':
            return action.payload;
        case 'CLEAR_EMAIL_LOGIN':
            return action.payload;
        default:
            return state;
    }
};
export const passwordLogin = (state = '', action) => {
    switch (action.type) {
        case 'SET_PASSWORD_LOGIN':
            return action.payload;
        case 'CLEAR_PASSWORD_LOGIN':
            return action.payload;
        default:
            return state;
    }
};
