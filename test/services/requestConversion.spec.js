import {requestConversion} from 'services/requestConversion';

import {CONVERT_URL} from 'src/constants';
import {USD, EUR, GBP} from 'src/constants';

describe('Requests Conversion', () => {
    let fetchStub;
    const price_usd = 7292.72;
    const price_eur = 6263.26505936;
    const price_gbp = 5548.1555216;

    beforeEach(() => {
        fetchStub = stubFetch();
    });

    it('request convert for EUR -> USD', done => {
        requestConversion(fetchStub)
            .then(response => {
                expect(response).toEqual({
                    [USD]: price_usd / price_eur,
                    [GBP]: price_gbp / price_eur
                });
                done();
            });
    });

    function stubFetch () {
        return function fetchStub (url) {
            switch (url) {
                case CONVERT_URL.replace(':currency', EUR):
                    return Promise.resolve({
                        json () {
                            return [{
                                price_usd,
                                price_eur
                            }];
                        }
                    });
                case CONVERT_URL.replace(':currency', GBP):
                    return Promise.resolve({
                        json () {
                            return [{
                                price_gbp
                            }];
                        }
                    });
                default:

            }
        };
    }
});
