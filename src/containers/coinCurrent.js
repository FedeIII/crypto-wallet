import {connect} from 'react-redux';

import {CoinCurrent} from 'components/coinCurrent';
import {getCryptoCoin} from 'domain/cryptoCoin';
import {getMinMaxRatio} from 'utils/numbers';

function mapStateToProps (stateProps, {name}) {
    const coin = getCryptoCoin(name);
    const price = coin.getState().price;
    const maxPrice = coin.getMaxPrice();
    const minPrice = coin.getMinPrice();

    return {
        variation: coin.getVariation(),
        barHeightRatio: getMinMaxRatio(price, maxPrice, minPrice),
    };
}

export const CoinCurrentContainer = connect(mapStateToProps)(CoinCurrent);
