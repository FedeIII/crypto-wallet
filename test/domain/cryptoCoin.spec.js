import {cryptoCoin} from 'domain/cryptoCoin';
import * as convertCurrency from 'domain/convertCurrency';

describe('Crypto Coin', () => {
    const oldPrice = 3.75;
    const oldPast = [
        {price: 2, variation: 0},
        {price: 5, variation: 1.5},
        {price: 3, variation: 0.67}
    ];
    const oldState = {
        price: oldPrice,
        past: oldPast
    };

    const toCurrency = 'toCurrency';
    const fromCurrency = 'fromCurrency';

    it('should initialize the coin when first time requested', () => {
        expect(cryptoCoin.initialize()).toEqual({
            price: 0,
            past: []
        });
    });

    it('should set the new values of the coin', () => {
        const newCoinValues = cryptoCoin.setCurrent(oldState, {price: 7});

        expect(newCoinValues).toEqual({
            price: 7,
            past: [
                ...oldPast,
                {price: oldPrice, variation: 0.25}
            ]
        });
    });

    it('should return the max price in history', () => {
        expect(cryptoCoin.getMaxPrice(oldState)).toEqual(5);
    });

    it('should return the min price in history', () => {
        expect(cryptoCoin.getMinPrice(oldState)).toEqual(2);
    });

    it('should return the mid price in history', () => {
        expect(cryptoCoin.getMidPrice(oldState)).toEqual(3.5);
    });

    it('should return the current price variation', () => {
        expect(cryptoCoin.getVariation(oldState)).toEqual(0.25);
    });

    it('should change the current and past currency', () => {
        spyOn(convertCurrency, 'convert').and.callFake(convertStub);

        expect(cryptoCoin.changeCurrency(oldState, fromCurrency, toCurrency)).toEqual({
            price: oldPrice + 1,
            past: oldPast.map(state => ({
                price: state.price + 1,
                variation: jasmine.any(Number)
            }))
        })
    });

    function convertStub (value, param1, param2) {
        if (param1 === fromCurrency && param2 === toCurrency) {
            return value + 1;
        }
    }

});
