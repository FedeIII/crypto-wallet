import {getCryptoCoin, clearAll} from 'domain/cryptoCoin';

describe('Crypto Coin', () => {
    let coin;
    const cryptoCoin = 'anyCryptoCoin';
    const newPrice = 'newPrice';
    const newPrice2 = 'newPrice2';
    const newPrice3 = 'newPrice3';
    const toCurrency = 'toCurrency';

    beforeEach(() => {
        coin = getCryptoCoin(cryptoCoin);
    });

    afterEach(clearAll);

    it('should initialize the coin when first time requested', () => {
        expect(coin.getState()).toEqual({
            name: cryptoCoin,
            price: 0,
            past: []
        });
    });

    it('should set the new values of the coin', () => {
        const newCoinValues = coin.setCurrent({
            price: newPrice
        });

        expect(newCoinValues).toEqual({
            name: cryptoCoin,
            price: newPrice,
            past: []
        });
    });

    it('should keep track of past values', () => {
        coin.setCurrent({price: 10});
        coin.setCurrent({price: 12});
        const newCoinValues = coin.setCurrent({
            price: 8
        });

        expect(newCoinValues).toEqual({
            name: cryptoCoin,
            price: 8,
            past: [{price: 10, variation: 0}, {price: 12, variation: 0.2}]
        });
    });

    it('should get the coin after initialized', () => {
        const newCoinValues = coin.setCurrent({
            price: newPrice
        });

        const sameCoin = getCryptoCoin(cryptoCoin);

        expect(sameCoin.getState()).toEqual(coin.getState());
    });

    it('should return the max price in history', () => {
        coin.setCurrent({price: 2});
        coin.setCurrent({price: 5});
        coin.setCurrent({price: 3});

        expect(coin.getMaxPrice()).toEqual(5);
    });

    it('should return the min price in history', () => {
        coin.setCurrent({price: 2});
        coin.setCurrent({price: 5});
        coin.setCurrent({price: 3});

        expect(coin.getMinPrice()).toEqual(2);
    });

    it('should return the mid price in history', () => {
        coin.setCurrent({price: 2});
        coin.setCurrent({price: 5});
        coin.setCurrent({price: 3});

        expect(coin.getMidPrice()).toEqual(3.5);
    });

    it('should return the current price variation', () => {
        coin.setCurrent({price: 10});
        coin.setCurrent({price: 13});

        expect(coin.getVariation()).toEqual(0.3);
    });

    it('should change the current and past currency', () => {
        const convert = convertStub;

        coin.setCurrent({price: 10});
        coin.setCurrent({price: 13});
        coin.setCurrent({price: 15});
        coin.setCurrent({price: 17});

        expect(coin.changeCurrency({convert, toCurrency})).toEqual({
            name: cryptoCoin,
            price: 18,
            past: [
                {price: 11, variation: jasmine.any(Number)},
                {price: 14, variation: jasmine.any(Number)}, 
                {price: 16, variation: jasmine.any(Number)}
            ]
        })
    });

    function convertStub (value, param) {
        if (param === toCurrency) {
            return value + 1;
        }
    }

});
