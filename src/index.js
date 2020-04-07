import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'mobx-react';
import store from './components/store';
import './components/styles.css';


ReactDOM.render(
    <Provider
        store={store}
    >
        <App />
    </Provider>,
    document.getElementById('root'));

