import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setUsername,
    setEmail,
    setPassword,
    sendRegisterForm,
} from './../../redux/actions/registerAction';
import { ToastContainer, toast } from 'react-toastify';
import { register } from './../services/httpRegister';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.emailRegister);
    const username = useSelector((state) => state.usernameRegister);
    const password = useSelector((state) => state.passwordRegister);
    const handle = async () => {
        try {
            const status = await cheack(password);
            if (status) {
                const { data } = await register(username, email, password);
                await console.log('ok', data);
                await dispatch(sendRegisterForm());
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error('some filds is not correct');
            }
        }
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <div
                className="register"
                style={{
                    backgroundColor: '#d1e0e0',
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div className="container">
                    <h2 className="text-center">Register Form</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="pwd">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => dispatch(setUsername(e))}
                            />
                        </div>
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
                            <label htmlFor="pwd">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="********"
                                name="password"
                                value={password}
                                onChange={(e) => dispatch(setPassword(e))}
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-secondary "
                                onClick={() => handle()}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Register;
