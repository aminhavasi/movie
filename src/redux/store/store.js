import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
export const store = createStore(null, compose(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
