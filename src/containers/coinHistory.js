import {connect} from 'react-redux';

import {CoinHistory} from 'components/coinHistory';
import {MAX_HISTORY_ELEMS} from 'src/constants';
import {roundTwoDecimals, getMinMaxRatio} from 'utils/numbers';
import {getCryptoCoin} from 'domain/cryptoCoin';

function withBarHeightRatio (price, maxPrice, minPrice) {
    return {
        price,
        barHeightRatio: getMinMaxRatio(price, maxPrice, minPrice)
    };
}

function pickLastElems (array) {
    return array.slice(
        Math.max(
            array.length - MAX_HISTORY_ELEMS,
            0
        )
    );
}

function adaptPrices ({past, name}) {
    const coin = getCryptoCoin(name);
    const maxPrice = coin.getMaxPrice();
    const minPrice = coin.getMinPrice();

    return pickLastElems(past)
        .filter(price => price)
        .map(roundTwoDecimals)
        .map(price => withBarHeightRatio(price, maxPrice, minPrice));
}

function mergeProps (stateProps, dispatchProps, {name}) {
    return {
        prices: adaptPrices(stateProps[name])
    };
}

export const CoinHistoryContainer = connect(
    state => state,
    null,
    mergeProps
)(CoinHistory);
