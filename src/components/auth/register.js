import React from 'react';
const Register = () => {
    return (
        <React.Fragment>
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
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-secondary "
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
