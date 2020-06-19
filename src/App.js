import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/common/notFound';
import HomePage from './components/HomePage';

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/notFound" component={NotFound} />
                <Redirect to="/notFound" />
            </Switch>
        </React.Fragment>
    );
}

export default App;
