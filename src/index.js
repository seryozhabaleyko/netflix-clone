import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
import App from 'components/app';
import Firebase, { FirebaseContext } from 'components/firebase';

import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={new Firebase()}>
            <Provider store={store}>
                <App />
            </Provider>
        </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);