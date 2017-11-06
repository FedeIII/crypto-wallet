import {mainReducer} from 'reducers/mainReducer';

import {createCoinReducer} from 'reducers/coinReducer';
import {BTC, ETH, LTC} from 'src/constants';

describe('Main Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            [BTC]: {name: BTC, price: 0},
            [ETH]: {name: ETH, price: 0},
            [LTC]: {name: LTC, price: 0}
        };

        const state = mainReducer();

        expect(state).toEqual(expectedState);
    });
});
