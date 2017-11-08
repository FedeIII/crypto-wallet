import {connect} from 'react-redux';

import {Coin} from 'components/coin';

function mapStateToProps (stateProps, {name}) {
    return {name};
}

export const CoinContainer = connect(mapStateToProps)(Coin);
