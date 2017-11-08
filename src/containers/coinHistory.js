import {connect} from 'react-redux';

import {CoinHistory} from 'components/coinHistory';
import {MAX_HISTORY_ELEMS} from 'src/constants';
import {getMinMaxRatio} from 'utils/numbers';
import {getCryptoCoin} from 'domain/cryptoCoin';

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

function adaptHistory (coin) {
    const coinState = coin.getState();
    const maxPrice = coin.getMaxPrice();
    const minPrice = coin.getMinPrice();

    return pickLastElems(coinState.past)
        .map(state => addBarHeightRatio(state, maxPrice, minPrice));
}

function mapStateToProps (stateProps, {name}) {
    const coin = getCryptoCoin(name);

    return {
        history: adaptHistory(coin)
    };
}

export const CoinHistoryContainer = connect(mapStateToProps)(CoinHistory);
