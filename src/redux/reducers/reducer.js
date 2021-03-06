import { combineReducers } from 'redux';
import {
    emailRegister,
    passwordRegister,
    usernameRegister,
} from './registerReducer';
import { emailLogin, passwordLogin } from './loginReducer';
import { setAdminSelect, setTest, createMovie } from './admin';
export const reducers = combineReducers({
    usernameRegister,
    emailRegister,
    passwordRegister,
    emailLogin,
    passwordLogin,
    setAdminSelect,
    setTest,
    createMovie,
});
