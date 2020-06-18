import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './components/common/notFound';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exacr path="/notFound" component={NotFound} />
            <Redirect to="/notFound" />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
