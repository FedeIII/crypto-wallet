import {roundTwoDecimals} from 'utils/numbers';
import {USD, EUR, GBP} from 'src/constants';

export function formatVariation (variationRatio) {
    if (variationRatio === 0) return '';

    const sign = variationRatio > 0 ? '+' : '';
    return sign + roundTwoDecimals(variationRatio * 100) + '%';
}

const symboFormatter = {
    [USD]: value => '$' + value,
    [EUR]: value => value + '€',
    [GBP]: value => '£' + value
};

export function formatCurrency (value, currency) {
    return symboFormatter[currency](
        roundTwoDecimals(value)
    );
}
