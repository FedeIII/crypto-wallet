import {CONVERT_URL} from 'src/constants';

export function requestConversion (fetch) {
    return fetch(CONVERT_URL)
        .then(response => response.json())
        .then(conversion => conversion.rates)
}
