import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunkMiddleware } from 'redux-thunk';
import AppRouter from './Components/AppRouter';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, )(createStore);
let store = createStoreWithMiddleware(reducer);

ReactDom.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
