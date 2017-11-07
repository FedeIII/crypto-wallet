import {connect} from 'react-redux';

import {CoinCurrent} from 'components/coinCurrent';
import {roundTwoDecimals, getMinMaxRatio} from 'utils/numbers';
import {getCryptoCoin} from 'domain/cryptoCoin';

function mergeProps (stateProps, dispatchProps, {name}) {
    const price = stateProps[name].price;
    const coin = getCryptoCoin(name);
    const maxPrice = coin.getMaxPrice();
    const minPrice = coin.getMinPrice();

    return {
        price: roundTwoDecimals(price),
        barHeightRatio: getMinMaxRatio(price, maxPrice, minPrice)
    };
}

export const CoinCurrentContainer = connect(
    state => state,
    null,
    mergeProps
)(CoinCurrent);
