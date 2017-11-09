import {RECEIVE_COINS, CONVERT_COINS} from 'src/actions';

import {getCryptoCoin} from 'domain/cryptoCoin';

function adaptToDomain (coinName, coins) {
    return coins.find(coin => coin.name === coinName);
}

export function createCoinReducer (coinName) {
    const coin = getCryptoCoin(coinName);

    return function coinReducer (state, action) {
        switch (action.type) {
            case RECEIVE_COINS:
                return Object.assign({},
                    coin.setCurrent(
                        adaptToDomain(coinName, action.payload)
                    )
                );
            case CONVERT_COINS:
                return Object.assign({},
                    coin.changeCurrency(action.payload)
                );
            default:
                return Object.assign({},
                    coin.getState()
                );
        }
    }
}
