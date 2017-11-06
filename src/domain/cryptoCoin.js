let cryptoCoins = {};

function getInitialValue () {
    return 0;
}

function createCryptoCoin (name) {
    let current = getInitialValue();
    const past = [];

    return {
        getState () {
            return {
                name,
                price: current,
                past
            }
        },

        setCurrent ({price}) {
            current = price;

            return this.getState();
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
