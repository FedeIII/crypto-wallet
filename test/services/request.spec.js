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
    const ETHPrice = 'ETHPrice';
    const anyPrice = 'anyPrice';
    const LTCPrice = 'LTCPrice';

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
            price_eur: BTCPrice
        };
    }

    function expectedBTC () {
        return {
            name: BTC,
            price: BTCPrice
        };
    };

    function createETH () {
        return {
            symbol: ETH,
            price_eur: ETHPrice
        };
    }

    function expectedETH () {
        return {
            name: ETH,
            price: ETHPrice
        };
    }

    function createLTC () {
        return {
            symbol: LTC,
            price_eur: LTCPrice
        };
    }

    function expectedLTC () {
        return {
            name: LTC,
            price: LTCPrice
        };
    }

    function createAnyCoin () {
        return {
            symbol: 'AnySymbol',
            price_eur: anyPrice
        };
    }
});
