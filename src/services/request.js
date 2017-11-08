import {
    COINS_URL,
    BTC, ETH, LTC
} from 'src/constants';

function getCoinsUrl (currency) {
    return COINS_URL.replace(':currency', currency);
}

function adaptCoins (coins) {
    return coins
        .filter(coin =>
            coin.symbol === BTC ||
            coin.symbol === ETH ||
            coin.symbol === LTC
        ).map(coin => ({
            name: coin.symbol,
            price: coin.price_eur
        }));
}

export function requestCoins (fetch, currency) {
    return fetch(getCoinsUrl(currency))
        .then(response => response.json())
        .then(adaptCoins);
}
