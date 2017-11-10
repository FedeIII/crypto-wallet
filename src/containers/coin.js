import {connect} from 'react-redux';

import {Coin} from 'components/coin';

function mapStateToProps (stateProps, {name}) {
    return {
        name,
        price: stateProps[name].price,
        currency: stateProps.currency
    };
}

export const CoinContainer = connect(mapStateToProps)(Coin);
