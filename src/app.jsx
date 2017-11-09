import React from 'react';

import {CryptoWallet} from 'components/cryptoWallet';
import {mainReducer} from 'reducers/mainReducer';
import {fetchCoins} from 'src/actions';

export function App ({
    ReactDOM,
    createStore,
    applyMiddleware,
    thunk,
    Provider
}) {

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

    return {
        startCoinsFetch () {
            store.dispatch(fetchCoins(store.getState()));
            setInterval(
                () => store.dispatch(fetchCoins(store.getState())),
                30000
            );
        }
    };

}
