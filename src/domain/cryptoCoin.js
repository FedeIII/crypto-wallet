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
            if (current) past.push(current);

            current = price;

            return this.getState();
        },

        getMaxPrice () {
            return Math.max(current, ...past);
        },

        getMinPrice () {
            return Math.min(current, ...past);
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
