import {createCoinReducer} from 'reducers/coinReducer';

import * as cryptoCoin from 'domain/cryptoCoin';

describe('Coin Reducer', () => {
    let coinReducer;
    const coinName = 'anyCoinName';
    const currentState = 'anyCurrentState';

    beforeEach(() => {
        spyOn(cryptoCoin, 'getCryptoCoin').and.callFake(getCryptoCoinStub);

        coinReducer = createCoinReducer(coinName);
    });

    it('should return the coin current value on a default action', () => {
        const coinState = coinReducer('any state', 'default action');

        expect(coinState).toEqual(currentState);
    });

    function createGetCurrentStub () {
        return jasmine.createSpy('getCurrent').and.returnValue(currentState);
    }

    function createCoinStub () {
        return {
            getCurrent: createGetCurrentStub()
        };
    }

    function getCryptoCoinStub (name) {
        if (name === coinName) return createCoinStub();
    }
});
