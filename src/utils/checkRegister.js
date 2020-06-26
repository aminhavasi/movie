import { toast } from 'react-toastify';
export function checkRegister(username, email, password) {
    if (username.length() < 3) {
        toast.error('user name must be bigger than 3 char');
        return false;
    } else if (password.length() < 8) {
        toast.error('password must be bigger than 8 char');
        return false;
    } else if (!email) {
        toast.error('email is required');
        return false;
    } else {
        return true;
    }
}
