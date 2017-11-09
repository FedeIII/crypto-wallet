import {requestConversion} from 'services/requestConversion';

import {
    CONVERT_URL,
    EUR, USD, GBP
} from 'src/constants';

describe('Requests Conversion', () => {
    let fetchStub;
    const gbpRate = 0.88405;
    const usdRate = 1.159;

    beforeEach(() => {
        fetchStub = stubFetch();
    });

    it('request convert for EUR -> USD', done => {
        requestConversion(fetchStub, EUR, USD)
            .then(convert => {
                expect(convert(1)).toEqual(usdRate);
                expect(convert(2)).toEqual(2 * usdRate);
                expect(convert(42.35)).toEqual(42.35 * usdRate);
                done();
            });
    });

    it('request convert for EUR -> GBP', done => {
        requestConversion(fetchStub, EUR, GBP)
            .then(convert => {
                expect(convert(1)).toEqual(gbpRate);
                expect(convert(2)).toEqual(2 * gbpRate);
                expect(convert(42.35)).toEqual(42.35 * gbpRate);
                done();
            });
    });

    it('request convert for USD -> EUR', done => {
        requestConversion(fetchStub, USD, EUR)
            .then(convert => {
                expect(convert(1 * usdRate)).toEqual(1);
                expect(convert(2 * usdRate)).toEqual(2);
                expect(convert(42.35 * usdRate)).toEqual(42.35);
                done();
            });
    });

    it('request convert for USD -> GBP', done => {
        requestConversion(fetchStub, USD, GBP)
            .then(convert => {
                expect(convert(1 * usdRate)).toEqual(1 * gbpRate);
                expect(convert(2 * usdRate)).toEqual(2 * gbpRate);
                expect(convert(42.35 * usdRate)).toEqual(42.35 * gbpRate);
                done();
            });
    });

    it('request convert for GBP -> EUR', done => {
        requestConversion(fetchStub, GBP, EUR)
            .then(convert => {
                expect(convert(1 * gbpRate)).toEqual(1);
                expect(convert(2 * gbpRate)).toEqual(2);
                expect(convert(42.35 * gbpRate)).toEqual(42.35);
                done();
            });
    });

    it('request convert for GBP -> USD', done => {
        requestConversion(fetchStub, GBP, USD)
            .then(convert => {
                expect(convert(1 * gbpRate)).toEqual(1 * usdRate);
                expect(convert(2 * gbpRate)).toEqual(2 * usdRate);
                expect(convert(42.35 * gbpRate)).toEqual(42.35 * usdRate);
                done();
            });
    });

    function stubFetch () {
        return function fetchStub (url) {
            if (url === CONVERT_URL) {
                return Promise.resolve({
                    json () {
                        return {
                            base: 'EUR',
                            rates: {
                                GBP: 0.88405,
                                USD: 1.159
                            }
                        }
                    }
                });
            }
        };
    }
});
