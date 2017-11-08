import {CHANGE_CURRENCY} from 'src/actions';

export function currencyReducer (state, action) {
    switch (action.type) {
        case CHANGE_CURRENCY:
            return action.payload;
        default:
            return state.currency;
    }
}
