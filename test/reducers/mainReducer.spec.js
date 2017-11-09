import {mainReducer} from 'reducers/mainReducer';

import {createCoinReducer} from 'reducers/coinReducer';
import {
    BTC, ETH, LTC,
    EUR
} from 'src/constants';

describe('Main Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            currency: EUR,
            [BTC]: {price: 0, past: []},
            [ETH]: {price: 0, past: []},
            [LTC]: {price: 0, past: []}
        };

        const state = mainReducer();

        expect(state).toEqual(expectedState);
    });
});
