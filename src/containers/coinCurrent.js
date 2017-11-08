import {connect} from 'react-redux';

import {CoinCurrent} from 'components/coinCurrent';
import {getCryptoCoin} from 'domain/cryptoCoin';
import {getMinMaxRatio} from 'utils/numbers';

function mergeProps (stateProps, dispatchProps, {name}) {
    const coin = getCryptoCoin(name);
    const price = coin.getState().price;
    const maxPrice = coin.getMaxPrice();
    const minPrice = coin.getMinPrice();

    return {
        variation: coin.getVariation(),
        barHeightRatio: getMinMaxRatio(price, maxPrice, minPrice),
    };
}

export const CoinCurrentContainer = connect(
    state => state,
    null,
    mergeProps
)(CoinCurrent);
