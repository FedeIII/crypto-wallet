let cryptoCoins = {};

function getLast (array) {
    return array[array.length - 1];
}

function getInitialValue () {
    return 0;
}

function getPastPrices (past) {
    return past.map(state => state.price);
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
            if (current) {
                past.push({
                    price: current,
                    variation: this.getVariation()
                });
            }

            current = price;

            return this.getState();
        },

        getMaxPrice () {
            return Math.max(current, ...getPastPrices(past));
        },

        getMinPrice () {
            return Math.min(current, ...getPastPrices(past));
        },

        getMidPrice () {
            return this.getMinPrice() + (this.getMaxPrice() - this.getMinPrice()) / 2;
        },

        getVariation () {
            if (!past.length) return 0;
            const previous = getLast(past).price;
            return (current - previous) / previous;
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
