import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from './Components/AppRouter';

ReactDom.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
