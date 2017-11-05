import {mainReducer} from 'reducers/mainReducer';

import {BTC, ETH, LTC} from 'src/constants';

describe('Main Reducer', () => {
    it('should return the initial state', () => {
        const expectedCoinState = {price: 6495.66, percentChange: 0.52};
        const expectedState = {
            [BTC]: expectedCoinState,
            [ETH]: expectedCoinState,
            [LTC]: expectedCoinState
        };

        const state = mainReducer();

        expect(state).toEqual(expectedState);
    });
});
