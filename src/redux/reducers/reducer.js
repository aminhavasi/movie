import { combineReducers } from 'redux';
import {
    emailRegister,
    passwordRegister,
    usernameRegister,
} from './registerReducer';
import { emailLogin, passwordLogin } from './loginReducer';
export const reducers = combineReducers({
    usernameRegister,
    emailRegister,
    passwordRegister,
    emailLogin,
    passwordLogin,
});
