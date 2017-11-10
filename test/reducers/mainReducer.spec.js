import {mainReducer} from 'reducers/mainReducer';

import {
    BTC, ETH, LTC,
    EUR
} from 'src/constants';

describe('Main Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            currency: EUR,
            loadingRates: true,
            [BTC]: {price: 0, past: []},
            [ETH]: {price: 0, past: []},
            [LTC]: {price: 0, past: []}
        };

        const state = mainReducer();

        expect(state).toEqual(expectedState);
    });
});
