import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {
    setEmail,
    setPassword,
    sendLoginForm,
} from './../../redux/actions/loginAction';
import { Link } from 'react-router-dom';
import { login } from '../services/httpLogin';
import { checkLogin } from './../../utils/checkLogin';
const Login = (props) => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.emailLogin);
    const password = useSelector((state) => state.passwordLogin);
    const handle = async () => {
        try {
            const status = await checkLogin(email, password);
            if (status) {
                const { headers } = await login(email, password);
                localStorage.setItem('token', headers['x-auth']);
                localStorage.setItem('access', headers['x-access']);

                await dispatch(sendLoginForm());

                if (headers['x-auth'] && headers['x-access'] === 'admin') {
                    window.location = '/admin';
                } else {
                    window.location = '/';
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('email or password is wrong');
            }
        }
    };
    return (
        <div className="login">
            <ToastContainer />
            <form className="shadow-lg" onSubmit={(e) => e.preventDefault()}>
                <div className="card ">
                    <div className="card card-header text-center">
                        <h5>Login Form</h5>
                    </div>
                    <div className="card card-body text-dark">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Example@info.com"
                                name="email"
                                value={email}
                                onChange={(e) => dispatch(setEmail(e))}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="******"
                                name="password"
                                value={password}
                                onChange={(e) => dispatch(setPassword(e))}
                            />
                        </div>
                        <div className="form-group">
                            <div className=" auth ">
                                <a href="#test">
                                    <i className="fa fa-google-plus bg-danger">
                                        <span>Login With Google+</span>
                                    </i>
                                </a>

                                <a href="#test">
                                    <i className="fa fa-facebook bg-primary float-right">
                                        <span className="pl-2">
                                            Login With FaceBook
                                        </span>
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => handle()}
                        className="card card-footer bg-primary text-center text-white"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div>
                <Link to="/register" className="loginLink">
                    <p>Dont have an account?</p>
                </Link>
            </div>
        </div>
    );
};
export default Login;
