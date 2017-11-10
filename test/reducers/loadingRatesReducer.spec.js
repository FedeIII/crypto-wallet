import {loadingRatesReducer} from 'reducers/loadingRatesReducer';

import {convertReady} from 'src/actions';
import * as convertCurrency from 'domain/convertCurrency';

describe('Change Currency Reducer', () => {
    const oldState = {loadingRates: true};
    const rates = 'rates';

    beforeEach(() => {
        spyOn(convertCurrency, 'saveRates');
    });

    it('[CONVERT_READY] action should save the convert rates and return false', () => {
        const newState = loadingRatesReducer(oldState, convertReady(rates));

        expect(convertCurrency.saveRates).toHaveBeenCalledWith(rates);
        expect(newState).toEqual(false);
    });

    it('[default] action should return the current state', () => {
        const newState = loadingRatesReducer(oldState, 'default action');

        expect(newState).toEqual(true);
    });

});
