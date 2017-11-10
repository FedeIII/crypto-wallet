import {combineReducers} from 'redux';

import {cryptoCoin} from 'domain/cryptoCoin';
import {
    BTC, ETH, LTC,
    EUR
} from 'src/constants';

import {currencyReducer} from 'reducers/currencyReducer';
import {loadingRatesReducer} from 'reducers/loadingRatesReducer';
import {createCoinReducer} from 'reducers/coinReducer';

const initialState = {
    currency: EUR,
    loadingRates: true,
    [BTC]: cryptoCoin.initialize(),
    [ETH]: cryptoCoin.initialize(),
    [LTC]: cryptoCoin.initialize()
};

const bitcoinReducer = createCoinReducer(BTC);
const ethereumReducer = createCoinReducer(ETH);
const litecoinReducer = createCoinReducer(LTC);

export function mainReducer (state = initialState, action = {}) {

    return {
        currency: currencyReducer(state, action),
        loadingRates: loadingRatesReducer(state, action),
        [BTC]: bitcoinReducer(state, action),
        [ETH]: ethereumReducer(state, action),
        [LTC]: litecoinReducer(state, action)
    };
}
