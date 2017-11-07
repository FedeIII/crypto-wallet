export function roundTwoDecimals (number) {
    return Math.round(number * 100) / 100;
}

export function roundOneDecimal (number) {
    return Math.round(number * 10) / 10;
}

export function getMinMaxRatio (number, max, min) {
    if (min === max) {
        return 1;
    }

    return roundOneDecimal((number - min) / (max - min));
}
