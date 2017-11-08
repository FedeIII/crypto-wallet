import {combineReducers} from 'redux';

import {getCryptoCoin} from 'domain/cryptoCoin';
import {
    BTC, ETH, LTC,
    EUR
} from 'src/constants';

import {currencyReducer} from 'reducers/currencyReducer';
import {createCoinReducer} from 'reducers/coinReducer';

const bitcoin = getCryptoCoin(BTC);
const ethereum = getCryptoCoin(ETH);
const litecoin = getCryptoCoin(LTC);

const initialState = {
    currency: EUR,
    [BTC]: bitcoin.getState(),
    [ETH]: ethereum.getState(),
    [LTC]: litecoin.getState()
};

const bitcoinReducer = createCoinReducer(BTC);
const ethereumReducer = createCoinReducer(ETH);
const litecoinReducer = createCoinReducer(LTC);

export function mainReducer (state = initialState, action = {}) {
    return {
        currency: currencyReducer(state, action),
        [BTC]: bitcoinReducer(state, action),
        [ETH]: ethereumReducer(state, action),
        [LTC]: litecoinReducer(state, action)
    };
}
