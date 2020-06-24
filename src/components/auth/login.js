import React from 'react';
const Login = () => {
    return (
        <div className="login">
            <form className="shadow-lg">
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
                    <button className="card card-footer bg-success text-center text-white">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Login;
