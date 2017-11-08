import {connect} from 'react-redux';

import {PriceLines} from 'components/priceLines';
import {getCryptoCoin} from 'domain/cryptoCoin';
import {formatCurrency} from 'utils/formatCoin';

function getMidPrice (max, mid, min) {
    if (max === min) return 0;
    return formatCurrency(mid);
}

function getMinPrice (max, mid, min) {
    if (max === min) return 0;
    return formatCurrency(min);
}

function mapStateToProps (stateProps, {name}) {
    const coin = getCryptoCoin(name);
    const maxPrice = coin.getMaxPrice();
    const midPrice = coin.getMidPrice();
    const minPrice = coin.getMinPrice();

    return {
        max: formatCurrency(maxPrice),
        mid: getMidPrice(maxPrice, midPrice, minPrice),
        min: getMinPrice(maxPrice, midPrice, minPrice)
    };
}

export const PriceLinesContainer = connect(mapStateToProps)(PriceLines);
