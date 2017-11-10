import {CONVERT_URL} from 'src/constants';
import {USD, EUR, GBP} from 'src/constants';

function getUrlEur () {
    return CONVERT_URL.replace(':currency', EUR);
}

function getUrlGbp () {
    return CONVERT_URL.replace(':currency', GBP);
}

function toJson ([eurResponse, gbpResponse]) {
    return Promise.all([
        eurResponse.json(),
        gbpResponse.json()
    ]);
}

function calculateRates ([[{price_usd, price_eur}], [{price_gbp}]]) {
    return {
        [USD]: price_usd / price_eur,
        [GBP]: price_gbp / price_eur
    };
}

export function requestConversion (fetch) {
    return Promise.all([
            fetch(getUrlEur()),
            fetch(getUrlGbp())
        ])
        .then(toJson)
        .then(calculateRates);
}
