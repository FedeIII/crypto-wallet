import {requestCoins} from 'services/request';
import fetch from 'isomorphic-fetch';

export const RECEIVE_COINS = 'RECEIVE_COINS';
export function receiveCoins (coins) {
    return {
        type: RECEIVE_COINS,
        payload: coins
    };
};

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export function changeCurrency (currency) {
    return {
        type: CHANGE_CURRENCY,
        payload: currency
    };
};

export function fetchCoins(currency) {
    return function (dispatch) {
        return requestCoins(fetch, currency)
            .then(coins =>
                dispatch(receiveCoins(coins))
            );
    }
}
