import {getCryptoCoin, clearAll} from 'domain/cryptoCoin';

describe('Crypto Coin', () => {
    const cryptoCoin = 'anyCryptoCoin';
    const newPrice = 'newPrice';
    const newPercentChange = 'newPercentChange';

    beforeEach(clearAll);

    it('should initialize the coin when first time requested', () => {
        const coin = getCryptoCoin(cryptoCoin);

        expect(coin.getCurrent()).toEqual({
            name: cryptoCoin,
            price: 0,
            percentChange: 0
        });
    });

    it('should set the new values of the coin', () => {
        const coin = getCryptoCoin(cryptoCoin);

        const newCoinValues = coin.setCurrent({
            price: newPrice,
            percentChange: newPercentChange
        });

        expect(newCoinValues).toEqual({
            name: cryptoCoin,
            price: newPrice,
            percentChange: newPercentChange
        });
    });

    it('should get the coin after initialized', () => {
        const coin = getCryptoCoin(cryptoCoin);
        const newCoinValues = coin.setCurrent({
            price: newPrice,
            percentChange: newPercentChange
        });

        const sameCoin = getCryptoCoin(cryptoCoin);

        expect(sameCoin.getCurrent()).toEqual(coin.getCurrent());
    });

});
