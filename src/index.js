import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store/store';
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route path="/" component={App} />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
