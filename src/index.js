import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'mobx-react';
import store from './components/store'


ReactDOM.render(
    <Provider
        value={store}
    >
        <App />
    </Provider>,
    document.getElementById('root'));

