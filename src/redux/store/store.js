import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './../reducers/reducer';
import thunk from 'redux-thunk';
export const store = createStore(reducers, compose(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
