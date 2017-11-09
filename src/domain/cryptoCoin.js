function getLast (array) {
    return array[array.length - 1];
}

function getPastPrices (past) {
    return past.map(state => state.price);
}

function convertState (convert, state, toCurrency) {
    return Object.assign({}, state, {
        price: convert(state.price, toCurrency)
    });
}

export const cryptoCoin = {
    initialize () {
        return {
            price: 0,
            past: []
        };
    },

    setCurrent (state, {price}) {
        const past = state.past.slice(0);

        if (state.price) {
            past.push({
                price: state.price,
                variation: this.getVariation(state)
            });
        }

        return {
            price,
            past
        };
    },

    getMaxPrice (state) {
        return Math.max(state.price, ...getPastPrices(state.past));
    },

    getMinPrice (state) {
        return Math.min(state.price, ...getPastPrices(state.past));
    },

    getMidPrice (state) {
        const min = this.getMinPrice(state);
        const max = this.getMaxPrice(state);

        return min + (max - min) / 2;
    },

    getVariation (state) {
        if (!state.past.length) return 0;
        const previous = getLast(state.past).price;
        return (state.price - previous) / previous;
    },

    changeCurrency (state, {convert, toCurrency}) {
        const past = state.past.map(pastState => convertState(convert, pastState, toCurrency));
        const price = convert(state.price, toCurrency);

        return {
            price,
            past
        };
    }
};
