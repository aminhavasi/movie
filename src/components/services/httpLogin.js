import http from './httpServices';
import config from './config.json';

export function Login(email, password) {
    return http.post(config.api_login, { email, password });
}
