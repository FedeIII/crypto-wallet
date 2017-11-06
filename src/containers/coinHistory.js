import {connect} from 'react-redux';

import {CoinHistory} from 'components/coinHistory';
import {MAX_HISTORY_ELEMS} from 'src/constants';
import {formatPrice} from 'utils/formatPrice'

function pickLast20Elems (array) {
    return array.slice(
        Math.max(
            array.length - MAX_HISTORY_ELEMS,
            0
        )
    );
}

function adaptPrices ({past}) {
    return pickLast20Elems(past)
        .filter(price => price)
        .map(formatPrice);
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
