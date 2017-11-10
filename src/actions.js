import {requestCoins} from 'services/requestCoins';
import {requestConversion} from 'services/requestConversion';
import fetch from 'isomorphic-fetch';

export const LOADING_RATES = 'LOADING_RATES';
export function loadingRates () {
    return {
        type: LOADING_RATES
    };
}

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

export const CONVERT_READY = 'CONVERT_READY';
export function convertReady (convert) {
    return {
        type: CONVERT_READY,
        payload: convert
    };
};

export function fetchCoins ({currency}) {
    return function (dispatch) {
        return requestCoins(fetch, currency)
            .then(coins =>
                dispatch(receiveCoins(coins))
            );
    }
}

export function fetchConversion () {
    return function (dispatch) {

        dispatch(loadingRates());

        return requestConversion(fetch)
            .then(rates => dispatch(
                convertReady(rates))
            );
    }
}
