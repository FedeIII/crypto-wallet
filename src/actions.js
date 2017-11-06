import {requestCoins} from 'services/request';
import fetch from 'isomorphic-fetch';

export const RECEIVE_COINS = 'RECEIVE_COINS';
export function receiveCoins (coins) {
    return {
        type: RECEIVE_COINS,
        payload: coins
    };
};

export function fetchCoins() {
    return function (dispatch) {
        return requestCoins(fetch)
            .then(coins =>
                dispatch(receiveCoins(coins))
            );
    }
}
