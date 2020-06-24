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
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Dashboard} />
                <Route path="/notFound" component={NotFound} />
                <Redirect to="/notFound" />
            </Switch>
        </React.Fragment>
    );
}

export default App;
