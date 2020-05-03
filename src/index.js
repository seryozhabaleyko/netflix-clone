import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from 'store';
import Routes from 'routes';

import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Routes />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);