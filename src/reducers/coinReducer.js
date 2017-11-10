import {RECEIVE_COINS, CHANGE_CURRENCY} from 'src/actions';

import {cryptoCoin} from 'domain/cryptoCoin';

function findCoinNewState (coinName, coins) {
    return coins.find(coin => coin.name === coinName);
}

export function createCoinReducer (coinName) {

    return function coinReducer (state, action) {
        const coinState = state[coinName];

        switch (action.type) {
            case RECEIVE_COINS:
                return Object.assign({},
                    cryptoCoin.setCurrent(
                        coinState,
                        findCoinNewState(coinName, action.payload)
                    )
                );
            case CHANGE_CURRENCY:
                return Object.assign({},
                    cryptoCoin.changeCurrency(coinState, state.currency, action.payload)
                );
            default:
                return Object.assign({}, coinState);
        }
    }
}
