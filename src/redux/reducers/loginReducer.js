export const emailLogin = (state = '', action) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return action.payload;
        case 'CLEAR_EMAIL':
            return action.payload;
        default:
            return state;
    }
};
export const passwordLogin = (state = '', action) => {
    switch (action.type) {
        case 'SET_PASSWORD':
            return action.payload;
        case 'CLEAR_PASSWORD':
            return action.payload;
        default:
            return state;
    }
};
//test
