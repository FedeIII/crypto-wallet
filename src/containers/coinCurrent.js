import {connect} from 'react-redux';

import {CoinCurrent} from 'components/coinCurrent';
import {cryptoCoin} from 'domain/cryptoCoin';
import {getMinMaxRatio} from 'utils/numbers';

function mapStateToProps (stateProps, {name}) {
    const coinState = stateProps[name];

    const maxPrice = cryptoCoin.getMaxPrice(coinState);
    const minPrice = cryptoCoin.getMinPrice(coinState);

    return {
        variation: cryptoCoin.getVariation(coinState),
        barHeightRatio: getMinMaxRatio(coinState.price, maxPrice, minPrice),
    };
}

export const CoinCurrentContainer = connect(mapStateToProps)(CoinCurrent);
