import {combineReducers} from 'redux';

import {getCryptoCoin} from 'domain/cryptoCoin';
import {BTC, ETH, LTC} from 'src/constants';

import {createCoinReducer} from 'reducers/coinReducer';

const bitcoin = getCryptoCoin(BTC);
const ethereum = getCryptoCoin(ETH);
const litecoin = getCryptoCoin(LTC);

const initialState = {
    [BTC]: bitcoin.getCurrent(),
    [ETH]: ethereum.getCurrent(),
    [LTC]: litecoin.getCurrent()
};

const bitcoinReducer = createCoinReducer(BTC);
const ethereumReducer = createCoinReducer(ETH);
const litecoinReducer = createCoinReducer(LTC);

export function mainReducer (state = initialState, action = {}) {
    return {
        [BTC]: bitcoinReducer(state, action),
        [ETH]: ethereumReducer(state, action),
        [LTC]: litecoinReducer(state, action)
    };
}
