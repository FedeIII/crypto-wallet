import {mainReducer} from 'reducers/mainReducer';

describe('Main Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            title: 'Crypto Wallet'
        };

        const state = mainReducer();

        expect(state).toEqual(expectedState);
    });
});
