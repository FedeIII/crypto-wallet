import {connect} from 'react-redux';

import {Coin} from 'components/coin';

function mergeProps (stateProps, dispatchProps, {name}) {
    return Object.assign({}, stateProps[name]);
}

export const CoinContainer = connect(
    state => state,
    null,
    mergeProps
)(Coin);
