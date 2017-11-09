import {requestCoins} from 'services/requestCoins';

import {
    COINS_URL,
    BTC, ETH, LTC,
    EUR, USD, GBP
} from 'src/constants';

describe('Requests Coins', () => {
    let fetchStub;
    const expectedCoins = [expectedBTC(), expectedETH(), expectedLTC()];
    const BTCPrice = 'BTCPrice';
    const ETHPrice = 'ETHPrice';
    const anyPrice = 'anyPrice';
    const LTCPrice = 'LTCPrice';
    const eurResponse = [
        {symbol: BTC, price_eur: BTCPrice},
        {symbol: ETH, price_eur: ETHPrice},
        {symbol: 'AnySymbol', price_eur: anyPrice},
        {symbol: LTC, price_eur: LTCPrice}
    ];
    const usdResponse = [
        {symbol: BTC, price_usd: BTCPrice},
        {symbol: ETH, price_usd: ETHPrice},
        {symbol: 'AnySymbol', price_usd: anyPrice},
        {symbol: LTC, price_usd: LTCPrice}
    ];
    const gbpResponse = [
        {symbol: BTC, price_gbp: BTCPrice},
        {symbol: ETH, price_gbp: ETHPrice},
        {symbol: 'AnySymbol', price_gbp: anyPrice},
        {symbol: LTC, price_gbp: LTCPrice}
    ];

    beforeEach(() => {
        fetchStub = stubFetch();
    });

    it('should request the coins and parse the response in EUR', done => {
        requestCoins(fetchStub, EUR).then(coins => {
            expect(coins).toEqual([
                {name: BTC, price: BTCPrice},
                {name: ETH, price: ETHPrice},
                {name: LTC, price: LTCPrice}
            ]);
            done();
        });
    })

    it('should request the coins and parse the response in USD', done => {
        requestCoins(fetchStub, USD).then(coins => {
            expect(coins).toEqual([
                {name: BTC, price: BTCPrice},
                {name: ETH, price: ETHPrice},
                {name: LTC, price: LTCPrice}
            ]);
            done();
        });
    })

    it('should request the coins and parse the response in GBP', done => {
        requestCoins(fetchStub, GBP).then(coins => {
            expect(coins).toEqual([
                {name: BTC, price: BTCPrice},
                {name: ETH, price: ETHPrice},
                {name: LTC, price: LTCPrice}
            ]);
            done();
        });
    })

    function expectedBTC () {
        return {
            name: BTC,
            price: BTCPrice
        };
    };

    function expectedETH () {
        return {
            name: ETH,
            price: ETHPrice
        };
    }

    function expectedLTC () {
        return {
            name: LTC,
            price: LTCPrice
        };
    }

    function stubFetch () {
        return function fetchStub (url) {
            let response;

            switch (url) {
                case COINS_URL.replace(':currency', EUR):
                    response = eurResponse;
                    break;
                case COINS_URL.replace(':currency', ''):
                    response = usdResponse;
                    break;
                case COINS_URL.replace(':currency', GBP):
                    response = gbpResponse;
                    break;
                default:
            }

            return Promise.resolve({
                json () {return response}
            });
        };
    }
});
