import {connect} from 'react-redux';

import {Coin} from 'components/coin';

function mergeProps (stateProps, dispatchProps, {name}) {
    return {name};
}

export const CoinContainer = connect(
    null,
    null,
    mergeProps
)(Coin);
