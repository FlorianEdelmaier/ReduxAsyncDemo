import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import AppRouter from './Components/AppRouter';

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDom.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
