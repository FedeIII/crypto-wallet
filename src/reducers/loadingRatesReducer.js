import {CONVERT_READY} from 'src/actions';
import {saveRates} from 'domain/convertCurrency';

export function loadingRatesReducer (state, action) {
    switch (action.type) {
        case CONVERT_READY:
            saveRates(action.payload);
            return false;
        default:
            return state.loadingRates;
    }
}
