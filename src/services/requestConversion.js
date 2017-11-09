import {
    CONVERT_URL,
    USD, EUR, GBP
} from 'src/constants';

function rateTree (rates) {
    return {
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
}

function createConvert (rates, fromCurrency, toCurrency) {
    return function convert (value) {
        return rateTree(rates)[fromCurrency][toCurrency](value);
    }
}

/*
CONVERT_URL returns rates for GBP/USD over EUR:
    {
        "base": "EUR",
        "date": "2017-11-08",
        "rates": {
            "GBP": 0.88405,
            "USD": 1.159
        }
    }
*/
export function requestConversion (fetch, fromCurrency, toCurrency) {
    return fetch(CONVERT_URL)
        .then(response => response.json())
        .then(conversion =>
            createConvert(conversion.rates, fromCurrency, toCurrency)
        );
}
