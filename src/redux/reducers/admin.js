export const setAdminSelect = (state = '', action) => {
    switch (action.type) {
        case 'SET_ADMIN_SELECT':
            return action.payload;
        case 'CLEAR_ADMIN_SELCET':
            return action.payload;
        default:
            return state;
    }
};
export const setTest = (state = '', action) => {
    switch (action.type) {
        case 'SET_TEST':
            return action.payload;
        case 'CLEAR_ADMIN_SELCET':
            return action.payload;
        default:
            return state;
    }
};
export const createMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_INFO_MOVIE':
            return [...action.payload];
        case 'CLEAR_INFO_MOVIE':
            return action.payload;
        default:
            return state;
    }
};
