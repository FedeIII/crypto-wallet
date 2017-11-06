import {requestCoins} from 'services/request';

import {
    COINS_URL,
    BTC, ETH, LTC
} from 'src/constants';

describe('Requests', () => {
    let fetchStub;
    const coinsResponse = [createBTC(), createETH(), createAnyCoin(), createLTC()];
    const expectedCoins = [expectedBTC(), expectedETH(), expectedLTC()];
    const BTCPrice = 'BTCPrice';
    const BTCPercent = 'BTCPercent';
    const ETHPrice = 'ETHPrice';
    const ETHPercent = 'ETHPercent';
    const anyPrice = 'anyPrice';
    const anyPercent = 'anyPercent';
    const LTCPrice = 'LTCPrice';
    const LTCPercent = 'LTCPercent';

    beforeEach(() => {
        fetchStub = jasmine.createSpy('fetchStub').and.callFake(url => {
            if (url === COINS_URL) {
                return Promise.resolve({
                    json () {return coinsResponse}
                });
            }
        });
    });

    it('should request the coins and parse the response', done => {
        requestCoins(fetchStub).then(coins => {
            expect(coins).toEqual(expectedCoins);
            done();
        });
    })

    function createBTC () {
        return {
            symbol: BTC,
            price_eur: BTCPrice,
            percent_change_1h: BTCPercent
        };
    }

    function expectedBTC () {
        return {
            name: BTC,
            price: BTCPrice,
            percentChange: BTCPercent
        };
    };

    function createETH () {
        return {
            symbol: ETH,
            price_eur: ETHPrice,
            percent_change_1h: ETHPercent
        };
    }

    function expectedETH () {
        return {
            name: ETH,
            price: ETHPrice,
            percentChange: ETHPercent
        };
    }

    function createLTC () {
        return {
            symbol: LTC,
            price_eur: LTCPrice,
            percent_change_1h: LTCPercent
        };
    }

    function expectedLTC () {
        return {
            name: LTC,
            price: LTCPrice,
            percentChange: LTCPercent
        };
    }

    function createAnyCoin () {
        return {
            symbol: 'AnySymbol',
            price_eur: anyPrice,
            percent_change_1h: anyPercent
        };
    }
});
