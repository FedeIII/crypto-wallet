import {requestCoins} from 'services/requestCoins';
import {requestConversion} from 'services/requestConversion';
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

export const CONVERT_COINS = 'CONVERT_COINS';
export function convertCoins (convert, currency) {
    return {
        type: CONVERT_COINS,
        payload: {convert, currency}
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

export function fetchConversion (toCurrency) {
    return function (dispatch, getState) {
        const fromCurrency = getState().currency;
        dispatch(changeCurrency(toCurrency));

        return requestConversion(fetch, fromCurrency, toCurrency)
            .then(convert => dispatch(
                convertCoins(convert, toCurrency))
            );
    }
}
