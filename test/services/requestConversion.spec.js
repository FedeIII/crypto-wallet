import {requestConversion} from 'services/requestConversion';

import {CONVERT_URL} from 'src/constants';

describe('Requests Conversion', () => {
    let fetchStub;
    const rates = 'rates';

    beforeEach(() => {
        fetchStub = stubFetch();
    });

    it('request convert for EUR -> USD', done => {
        requestConversion(fetchStub)
            .then(response => {
                expect(response).toEqual(rates);
                done();
            });
    });

    function stubFetch () {
        return function fetchStub (url) {
            if (url === CONVERT_URL) {
                return Promise.resolve({
                    json () { return {rates} }
                });
            }
        };
    }
});
