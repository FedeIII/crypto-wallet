import {connect} from 'react-redux';

import {CoinCurrent} from 'components/coinCurrent';
import {formatPrice} from 'utils/formatPrice'

function mergeProps (stateProps, dispatchProps, {name}) {
    return {
        price: formatPrice(stateProps[name].price)
    };
}

export const CoinCurrentContainer = connect(
    state => state,
    null,
    mergeProps
)(CoinCurrent);
