import {createCoinReducer} from 'reducers/coinReducer';

import * as cryptoCoin from 'domain/cryptoCoin';
import {receiveCoins, convertCoins} from 'src/actions';

describe('Coin Reducer', () => {
    let coinReducer;
    const coinName = 'anyCoinName';
    const otherCoinName = 'otherCoinName';
    const currentState = {stateAttr: 'anyStateAttr'};
    const newState = {newStateAttr: 'anyNewStateAttr'};
    const convertedState = {convertedStateAttr: 'anyConvertedStateAttr'};
    const coin = {name: coinName};
    const changeCurrencyPayload = 'changeCurrencyPayload';

    beforeEach(() => {
        spyOn(cryptoCoin, 'getCryptoCoin').and.callFake(getCryptoCoinStub);

        coinReducer = createCoinReducer(coinName);
    });

    it('[RECEIVE_COINS] action should return the new coin value set', () => {
        const otherCoin = {name: otherCoinName};

        const coinState = coinReducer('any state', receiveCoins([coin, otherCoin]));

        expect(coinState).toEqual(newState);
    });

    it('[CONVERT_COINS] action should return coin state converted', () => {
        const coinState = coinReducer('any state', convertCoins(changeCurrencyPayload, 'any currency'));

        expect(coinState).toEqual(convertedState);
    });

    it('[default] action should return the coin current value', () => {
        const coinState = coinReducer('any state', 'default action');

        expect(coinState).toEqual(currentState);
    });

    function createGetStateStub () {
        return jasmine.createSpy('getState').and.returnValue(currentState);
    }

    function createSetCurrentStub () {
        return jasmine.createSpy('setCurrent').and.callFake(coinValues => {
            if (coinValues === coin) {
                return newState;
            }
        });
    }

    function createChangeCurrencyStub () {
        return jasmine.createSpy('changeCurrency').and.callFake(payload => {
            if (payload.convert === changeCurrencyPayload) {
                return convertedState;
            }
        });
    }

    function createCoinStub () {
        return {
            getState: createGetStateStub(),
            setCurrent: createSetCurrentStub(),
            changeCurrency: createChangeCurrencyStub()
        };
    }

    function getCryptoCoinStub (name) {
        if (name === coinName) return createCoinStub();
    }
});
