import {combineReducers} from 'redux';

import {cryptoCoin} from 'domain/cryptoCoin';
import {
    BTC, ETH, LTC,
    EUR
} from 'src/constants';

import {currencyReducer} from 'reducers/currencyReducer';
import {createCoinReducer} from 'reducers/coinReducer';

const initialState = {
    currency: EUR,
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
        [BTC]: bitcoinReducer(state[BTC], action),
        [ETH]: ethereumReducer(state[ETH], action),
        [LTC]: litecoinReducer(state[LTC], action)
    };
}
