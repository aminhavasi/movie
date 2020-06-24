import { combineReducers } from 'redux';
import {
    emailRegister,
    passwordRegister,
    usernameRegister,
} from './registerReducer';
export const reducers = combineReducers({
    usernameRegister,
    emailRegister,
    passwordRegister,
});
