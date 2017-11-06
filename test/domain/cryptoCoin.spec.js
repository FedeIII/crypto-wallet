import {getCryptoCoin, clearAll} from 'domain/cryptoCoin';

describe('Crypto Coin', () => {
    const cryptoCoin = 'anyCryptoCoin';
    const newPrice = 'newPrice';

    beforeEach(clearAll);

    it('should initialize the coin when first time requested', () => {
        const coin = getCryptoCoin(cryptoCoin);

        expect(coin.getCurrent()).toEqual({
            name: cryptoCoin,
            price: 0
        });
    });

    it('should set the new values of the coin', () => {
        const coin = getCryptoCoin(cryptoCoin);

        const newCoinValues = coin.setCurrent({
            price: newPrice
        });

        expect(newCoinValues).toEqual({
            name: cryptoCoin,
            price: newPrice
        });
    });

    it('should get the coin after initialized', () => {
        const coin = getCryptoCoin(cryptoCoin);
        const newCoinValues = coin.setCurrent({
            price: newPrice
        });

        const sameCoin = getCryptoCoin(cryptoCoin);

        expect(sameCoin.getCurrent()).toEqual(coin.getCurrent());
    });

});
