import {connect} from 'react-redux';

import {PriceLines} from 'components/priceLines';
import {cryptoCoin} from 'domain/cryptoCoin';
import {formatCurrency} from 'utils/formatCoin';

function getMidPrice (max, mid, min, currency) {
    if (max === min) return 0;
    return formatCurrency(mid, currency);
}

function getMinPrice (max, mid, min, currency) {
    if (max === min) return 0;
    return formatCurrency(min, currency);
}

function mapStateToProps (stateProps, {name}) {
    const coinState = stateProps[name];

    const maxPrice = cryptoCoin.getMaxPrice(coinState);
    const midPrice = cryptoCoin.getMidPrice(coinState);
    const minPrice = cryptoCoin.getMinPrice(coinState);

    return {
        max: formatCurrency(maxPrice, stateProps.currency),
        mid: getMidPrice(maxPrice, midPrice, minPrice, stateProps.currency),
        min: getMinPrice(maxPrice, midPrice, minPrice, stateProps.currency)
    };
}

export const PriceLinesContainer = connect(mapStateToProps)(PriceLines);
