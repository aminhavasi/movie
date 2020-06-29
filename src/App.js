import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/common/notFound';
import HomePage from './components/HomePage';
import Register from './components/auth/register';
import Dashboard from './components/admin/dashboard';
import Login from './components/auth/login';

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/register"
                    render={() => {
                        if (localStorage.getItem('token')) {
                            return <Redirect to="/" />;
                        } else {
                            return <Register />;
                        }
                    }}
                />
                <Route
                    path="/login"
                    render={() => {
                        if (localStorage.getItem('token')) {
                            if (localStorage.getItem('access') === 'admin') {
                                return <Redirect to="/admin" />;
                            } else {
                                return <Redirect to="/" />;
                            }
                        } else {
                            return <Login />;
                        }
                    }}
                />
                <Route
                    path="/admin"
                    render={() => {
                        if (!localStorage.getItem('token')) {
                            return <Dashboard />;
                        } else return <Redirect to="/" />;
                    }}
                />

                <Route path="/notFound" component={NotFound} />
                <Redirect to="/notFound" />
            </Switch>
        </React.Fragment>
    );
}

export default App;
