import {getCryptoCoin, clearAll} from 'domain/cryptoCoin';

describe('Crypto Coin', () => {
    const cryptoCoin = 'anyCryptoCoin';
    const newPrice = 'newPrice';
    const newPrice2 = 'newPrice2';
    const newPrice3 = 'newPrice3';

    beforeEach(clearAll);

    it('should initialize the coin when first time requested', () => {
        const coin = getCryptoCoin(cryptoCoin);

        expect(coin.getState()).toEqual({
            name: cryptoCoin,
            price: 0,
            past: []
        });
    });

    it('should set the new values of the coin', () => {
        const coin = getCryptoCoin(cryptoCoin);

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
        const coin = getCryptoCoin(cryptoCoin);

        coin.setCurrent({price: newPrice});
        coin.setCurrent({price: newPrice2});
        const newCoinValues = coin.setCurrent({
            price: newPrice3
        });

        expect(newCoinValues).toEqual({
            name: cryptoCoin,
            price: newPrice3,
            past: [newPrice, newPrice2]
        });
    });

    it('should get the coin after initialized', () => {
        const coin = getCryptoCoin(cryptoCoin);
        const newCoinValues = coin.setCurrent({
            price: newPrice
        });

        const sameCoin = getCryptoCoin(cryptoCoin);

        expect(sameCoin.getState()).toEqual(coin.getState());
    });

    it('should return the max price in history', () => {
        const coin = getCryptoCoin(cryptoCoin);

        coin.setCurrent({price: 2});
        coin.setCurrent({price: 5});
        coin.setCurrent({price: 3});

        expect(coin.getMaxPrice()).toEqual(5);
    });

    it('should return the min price in history', () => {
        const coin = getCryptoCoin(cryptoCoin);

        coin.setCurrent({price: 2});
        coin.setCurrent({price: 5});
        coin.setCurrent({price: 3});

        expect(coin.getMinPrice()).toEqual(2);
    });

    it('should return the mid price in history', () => {
        const coin = getCryptoCoin(cryptoCoin);

        coin.setCurrent({price: 2});
        coin.setCurrent({price: 5});
        coin.setCurrent({price: 3});

        expect(coin.getMidPrice()).toEqual(3.5);
    });

});
