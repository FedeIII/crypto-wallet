import {connect} from 'react-redux';

import {CurrencySelector} from 'components/currencySelector';
import {changeCurrency} from 'src/actions';

function mapStateToProps (stateProps) {
    return {
        currency: stateProps.currency,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onSelect: event => dispatch(changeCurrency(event.target.value))
    };
}

export const CurrencySelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencySelector);
