/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import CryptoWallet from 'containers/cryptoWallet';
import {mainReducer} from 'reducers/mainReducer';

import styles from 'styles/main.scss';

const store = createStore(mainReducer);

ReactDOM.render(
    <Provider store={store}>
        <CryptoWallet />
     </Provider>,
    document.querySelector('#app')
);
