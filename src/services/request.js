import {
    COINS_URL,
    BTC, ETH, LTC
} from 'src/constants';

function adaptCoins (coins) {
    return coins
        .filter(coin =>
            coin.symbol === BTC ||
            coin.symbol === ETH ||
            coin.symbol === LTC
        ).map(coin => ({
            name: coin.symbol,
            price: coin.price_eur,
            percentChange: coin.percent_change_1h
        }));
}

export function requestCoins (fetch) {
    return fetch(COINS_URL)
        .then(response => response.json())
        .then(adaptCoins);
}
