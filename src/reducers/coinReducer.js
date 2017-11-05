import {getCryptoCoin} from 'domain/cryptoCoin';

export function createCoinReducer (coinName) {
    const coin = getCryptoCoin(coinName);

    return function coinReducer (state, action) {
        switch (action.type) {
            default:
                return coin.getCurrent();
        }
    }
}
