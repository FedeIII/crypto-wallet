import {roundTwoDecimals} from 'utils/numbers';

export function formatVariation (variationRatio) {
    if (variationRatio === 0) return '';

    const sign = variationRatio > 0 ? '+' : '';
    return sign + roundTwoDecimals(variationRatio * 100) + '%';
}
