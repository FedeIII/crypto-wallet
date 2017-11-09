import {RECEIVE_COINS, CONVERT_COINS} from 'src/actions';

import {cryptoCoin} from 'domain/cryptoCoin';

function findCoinNewState (coinName, coins) {
    return coins.find(coin => coin.name === coinName);
}

export function createCoinReducer (coinName) {

    return function coinReducer (state, action) {
        switch (action.type) {
            case RECEIVE_COINS:
                return Object.assign({},
                    cryptoCoin.setCurrent(
                        state,
                        findCoinNewState(coinName, action.payload)
                    )
                );
            case CONVERT_COINS:
                return Object.assign({},
                    cryptoCoin.changeCurrency(state, action.payload)
                );
            default:
                return Object.assign({}, state);
        }
    }
}
