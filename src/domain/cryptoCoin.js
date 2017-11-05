const cryptoCoins = {};

function getInitialValue () {
    return {
        price: 6495.66,
        percentChange: 0.52
    };
}

function createCryptoCoin () {
    const current = getInitialValue();
    return {
        getCurrent () {
            return current;
        }
    };
}

export function getCryptoCoin (name) {
    if (!cryptoCoins[name]) {
        cryptoCoins[name] = createCryptoCoin();
    }

    return cryptoCoins[name];
}
