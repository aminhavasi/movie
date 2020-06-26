import http from './httpServices';
import config from './config.json';

export function register(username, email, password) {
    return http.post(config.api_register, { username, email, password });
}
