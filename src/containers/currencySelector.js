import {connect} from 'react-redux';

import {CurrencySelector} from 'components/currencySelector';
import {fetchConversion} from 'src/actions';

function mapStateToProps (stateProps) {
    return {
        currency: stateProps.currency,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        onSelect: event => dispatch(fetchConversion(event.target.value))
    };
}

export const CurrencySelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencySelector);
