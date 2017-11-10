import {USD, EUR, GBP} from 'src/constants';

let rates;

const rateTree = {
    [EUR]: {
        [GBP]: value => value * rates[GBP],
        [USD]: value => value * rates[USD]
    },
    [GBP]: {
        [EUR]: value => value / rates[GBP],
        [USD]: value => value / rates[GBP] * rates[USD]
    },
    [USD]: {
        [EUR]: value => value / rates[USD],
        [GBP]: value => value / rates[USD] * rates[GBP]
    }
};

export function convert (value, fromCurrency, toCurrency) {
    return rateTree[fromCurrency][toCurrency](value);
}

export function saveRates (receivedRates) {
    rates = receivedRates;
}
