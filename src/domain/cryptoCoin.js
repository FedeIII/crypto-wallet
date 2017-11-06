let cryptoCoins = {};

function getInitialValue (name) {
    return {
        name,
        price: 0,
        percentChange: 0
    };
}

function createCryptoCoin (name) {
    const current = getInitialValue(name);
    return {
        getCurrent () {
            return current;
        },
        setCurrent ({price, percentChange}) {
            current.price = price;
            current.percentChange = percentChange;

            return current;
        }
    };
}

export function getCryptoCoin (name) {
    if (!cryptoCoins[name]) {
        cryptoCoins[name] = createCryptoCoin(name);
    }

    return cryptoCoins[name];
}

export function clearAll () {
    cryptoCoins = {};
}
