export const setId = (value) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_ADMIN_SELECT',
            payload: value,
        });
    };
};

export const clearEmail = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_ADMIN_SELECT', payload: '' });
    };
};

export const setTest = (value) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_ADMIN_TEST', payload: value });
    };
};

export const createMovie = (value) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_INFO_MOVIE',
            payload: value,
        });
    };
};
export const clearCreateMovie = () => {
    return async (dispatch) => {
        await dispatch({
            type: 'CLEAR_INFO_MOVIE',
            payload: {},
        });
    };
};
