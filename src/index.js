import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from 'store';
import App from 'components/app';
import Firebase, { FirebaseContext } from 'components/firebase';

import './index.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={new Firebase()}>
            <Provider store={store}>
                <Router history={history}>
                    <App />
                </Router>
            </Provider>
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);