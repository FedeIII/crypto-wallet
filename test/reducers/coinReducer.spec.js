import {createCoinReducer} from 'reducers/coinReducer';

import * as cryptoCoinModule from 'domain/cryptoCoin';
import {receiveCoins, changeCurrency} from 'src/actions';

describe('Coin Reducer', () => {
    let coinReducer;
    const coinName = 'anyCoinName';
    const otherCoinName = 'otherCoinName';
    const otherCoin = {name: otherCoinName};
    const coin = {name: coinName};
    const oldCoinState = {stateAttr: 'stateAttr'};
    const newCoinState = {newStateAttr: 'newStateAttr'};
    const oldCurrency = 'oldCurrency';
    const currentState = {
        [coinName]: oldCoinState,
        currency: oldCurrency
    };
    const currencyMock = 'currencyMock';

    beforeEach(() => {
        cryptoCoinModule.cryptoCoin = createCryptoCoinStub();

        coinReducer = createCoinReducer(coinName);
    });

    it('[RECEIVE_COINS] action should return the new coin value set', () => {
        const coinState = coinReducer(currentState, receiveCoins([coin, otherCoin]));

        expect(coinState).toEqual(newCoinState);
    });

    it('[CHANGE_CURRENCY] action should return coin state converted', () => {
        const coinState = coinReducer(currentState, changeCurrency(currencyMock));

        expect(coinState).toEqual(newCoinState);
    });

    it('[default] action should return the coin current value', () => {
        const coinState = coinReducer(currentState, 'default action');

        expect(coinState).toEqual(oldCoinState);
    });

    function createSetCurrentStub () {
        return function setCurrentStub (oldState, newState) {
            if (oldState === oldCoinState && newState === coin) {
                return newCoinState;
            }
        }
    }

    function createChangeCurrencyStub () {
        return function changeCurrencyStub (oldState, fromCurrency, toCurrency) {
            if (
                oldState === oldCoinState &&
                fromCurrency === oldCurrency &&
                toCurrency === currencyMock
            ) {
                return newCoinState;
            }
        }
    }

    function createCryptoCoinStub () {
        return {
            setCurrent: createSetCurrentStub(),
            changeCurrency: createChangeCurrencyStub()
        };
    }
});
