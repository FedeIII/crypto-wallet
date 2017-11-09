import {createCoinReducer} from 'reducers/coinReducer';

import * as cryptoCoinModule from 'domain/cryptoCoin';
import {receiveCoins, convertCoins} from 'src/actions';

describe('Coin Reducer', () => {
    let coinReducer;
    const coinName = 'anyCoinName';
    const otherCoinName = 'otherCoinName';
    const otherCoin = {name: otherCoinName};
    const coin = {name: coinName};
    const currentState = {stateAttr: 'stateAttr'};
    const newCoinState = {newStateAttr: 'newStateAttr'};
    const convertMock = 'convertMock';
    const currencyMock = 'currencyMock';

    beforeEach(() => {
        cryptoCoinModule.cryptoCoin = createCryptoCoinStub();

        coinReducer = createCoinReducer(coinName);
    });

    it('[RECEIVE_COINS] action should return the new coin value set', () => {
        const coinState = coinReducer(currentState, receiveCoins([coin, otherCoin]));

        expect(coinState).toEqual(newCoinState);
    });

    it('[CONVERT_COINS] action should return coin state converted', () => {
        const coinState = coinReducer(currentState, convertCoins(convertMock, currencyMock));

        expect(coinState).toEqual(newCoinState);
    });

    it('[default] action should return the coin current value', () => {
        const coinState = coinReducer(currentState, 'default action');

        expect(coinState).toEqual(currentState);
    });

    function createSetCurrentStub () {
        return function setCurrentStub (oldState, newState) {
            if (oldState === currentState && newState === coin) {
                return newCoinState;
            }
        }
    }

    function createChangeCurrencyStub () {
        return function changeCurrencyStub (oldState, {convert, currency}) {
            if (
                oldState === currentState &&
                convert === convertMock &&
                currency === currencyMock
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
