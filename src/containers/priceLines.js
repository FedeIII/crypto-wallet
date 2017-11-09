import {connect} from 'react-redux';

import {PriceLines} from 'components/priceLines';
import {getCryptoCoin} from 'domain/cryptoCoin';
import {formatCurrency} from 'utils/formatCoin';

function getMidPrice (max, mid, min, currency) {
    if (max === min) return 0;
    return formatCurrency(mid, currency);
}

function getMinPrice (max, mid, min, currency) {
    if (max === min) return 0;
    return formatCurrency(min, currency);
}

function mapStateToProps ({currency}, {name}) {
    const coin = getCryptoCoin(name);
    const maxPrice = coin.getMaxPrice();
    const midPrice = coin.getMidPrice();
    const minPrice = coin.getMinPrice();

    return {
        max: formatCurrency(maxPrice, currency),
        mid: getMidPrice(maxPrice, midPrice, minPrice, currency),
        min: getMinPrice(maxPrice, midPrice, minPrice, currency)
    };
}

export const PriceLinesContainer = connect(mapStateToProps)(PriceLines);
