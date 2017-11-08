import {currencyReducer} from 'reducers/currencyReducer';

import {changeCurrency} from 'src/actions';

describe('Change Currency Reducer', () => {
    const oldCurrency = 'oldCurrency';
    const oldState = {currency: oldCurrency};

    it('[CHANGE_CURRENCY] action should return the new currency set', () => {
        const newCurrency = 'newCurrency';

        const currencyState = currencyReducer(oldState, changeCurrency(newCurrency));

        expect(currencyState).toEqual(newCurrency);
    });

    it('[default] action should return the current currency', () => {
        const currencyState = currencyReducer(oldState, 'default action');

        expect(currencyState).toEqual(oldCurrency);
    });

});
