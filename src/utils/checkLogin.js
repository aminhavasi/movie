import { toast } from 'react-toastify';
export function checkLogin(email, password) {
    if (password.length < 8) {
        toast.error('password must be bigger than 8 char');
        return false;
    } else if (!email) {
        toast.error('email is required');
        return false;
    } else {
        return true;
    }
}
