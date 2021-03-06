import {connect} from 'react-redux';

import {CoinHistory} from 'components/coinHistory';
import {MAX_HISTORY_ELEMS} from 'src/constants';
import {getMinMaxRatio} from 'utils/numbers';
import {cryptoCoin} from 'domain/cryptoCoin';

function addBarHeightRatio (state, maxPrice, minPrice) {
    return Object.assign({
        barHeightRatio: getMinMaxRatio(state.price, maxPrice, minPrice)
    }, state);
}

function pickLastElems (array) {
    return array.slice(
        Math.max(
            array.length - MAX_HISTORY_ELEMS,
            0
        )
    );
}

function adaptHistory (state) {
    const maxPrice = cryptoCoin.getMaxPrice(state);
    const minPrice = cryptoCoin.getMinPrice(state);

    return pickLastElems(state.past)
        .map(state => addBarHeightRatio(state, maxPrice, minPrice));
}

function mapStateToProps (stateProps, {name}) {
    const coinState = stateProps[name];

    return {
        history: adaptHistory(coinState)
    };
}

export const CoinHistoryContainer = connect(mapStateToProps)(CoinHistory);
