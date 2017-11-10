import {
    COINS_URL,
    BTC, ETH, LTC,
    USD, EUR, GBP
} from 'src/constants';

const currencyParamMap = {
    [USD]: '',
    [EUR]: 'EUR',
    [GBP]: 'GBP'
};

const currencyPricemMap = {
    [USD]: 'price_usd',
    [EUR]: 'price_eur',
    [GBP]: 'price_gbp'
};

function getCoinsUrl (currency) {
    return COINS_URL.replace(':currency', currencyParamMap[currency]);
}

function adaptCoins (coins, currency) {
    return coins
        .filter(coin =>
            coin.symbol === BTC ||
            coin.symbol === ETH ||
            coin.symbol === LTC
        ).map(coin => ({
            name: coin.symbol,
            price: parseFloat(coin[currencyPricemMap[currency]])
        }));
}

export function requestCoins (fetch, currency) {
    return fetch(getCoinsUrl(currency))
        .then(response => response.json())
        .then(coins => adaptCoins(coins, currency));
}
