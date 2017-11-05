import {getCryptoCoin} from 'domain/cryptoCoin';

describe('Crypto Coin', () => {
    const cryptoCoin = 'anyCryptoCoin';

    it('should initialize the coin when first time requested', () => {
        const coin = getCryptoCoin(cryptoCoin);

        expect(coin.getCurrent()).toEqual({
            price: 6495.66,
            percentChange: 0.52
        });
    });

});
