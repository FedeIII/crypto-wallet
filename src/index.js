import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import CryptoWallet from 'containers/cryptoWallet';
import {mainReducer} from 'reducers/mainReducer';
import {fetchCoins} from 'src/actions';

import styles from 'styles/main.scss';

const store = createStore(
    mainReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <CryptoWallet />
     </Provider>,
    document.querySelector('#app')
);

store.dispatch(fetchCoins());
