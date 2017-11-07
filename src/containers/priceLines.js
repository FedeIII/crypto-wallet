import {connect} from 'react-redux';

import {PriceLines} from 'components/priceLines';
import {getCryptoCoin} from 'domain/cryptoCoin';
import {roundTwoDecimals} from 'utils/numbers';

function getMaxPrice (max) {
    return roundTwoDecimals(max);
}

function getMidPrice (max, mid, min) {
    if (max === min) return 0;
    return roundTwoDecimals(mid);
}

function getMinPrice (max, mid, min) {
    if (max === min) return 0;
    return roundTwoDecimals(min);
}

function mergeProps (stateProps, dispatchProps, {name}) {
    const coin = getCryptoCoin(name);
    const maxPrice = coin.getMaxPrice();
    const midPrice = coin.getMidPrice();
    const minPrice = coin.getMinPrice();

    return {
        max: getMaxPrice(maxPrice),
        mid: getMidPrice(maxPrice, midPrice, minPrice),
        min: getMinPrice(maxPrice, midPrice, minPrice)
    };
}

export const PriceLinesContainer = connect(
    state => state,
    null,
    mergeProps
)(PriceLines);
