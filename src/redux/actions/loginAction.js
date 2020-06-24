export const setEmail = (event) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_EMAIL_LOGIN',
            payload: event.target.value,
        });
    };
};
export const setPassword = (event) => {
    return async (dispatch) => {
        await dispatch({
            type: 'SET_PASSWORD_LOGIN',
            payload: event.target.value,
        });
    };
};

export const clearEmail = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_EMAIL_LOGIN', payload: '' });
    };
};
export const clearPassword = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_PASSWORD_LOGIN', payload: '' });
    };
};

export const sendLoginForm = (props) => {
    return async (dispatch) => {
        await dispatch(clearPassword());
        await dispatch(clearEmail());
    };
};
