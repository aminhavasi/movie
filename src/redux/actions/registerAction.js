export const setUsername = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_USERNAME', payload: event.target.value });
    };
};

export const setEmail = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_EMAIL', payload: event.target.value });
    };
};
export const setPassword = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_PASSWORD', payload: event.target.value });
    };
};

export const clearUsername = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_USERNAME', payload: '' });
    };
};

export const clearEmail = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_EMAIL', payload: '' });
    };
};
export const clearPassword = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_PASSWORD', payload: '' });
    };
};

export const sendRegisterForm = (props) => {
    return async (dispatch) => {
        await dispatch(clearPassword());
        await dispatch(clearEmail());
        await dispatch(clearUsername());
    };
};
