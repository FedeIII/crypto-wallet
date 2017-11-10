import {convert, saveRates} from 'domain/convertCurrency';

import {USD, EUR, GBP} from 'src/constants';

describe('Conver Currency', () => {
    const gbpRate = 0.88405;
    const usdRate = 1.159;

    beforeEach(() => saveRates({
        [USD]: usdRate,
        [GBP]: gbpRate
    }));

    it('EUR -> USD', () => {
        expect(convert(1, EUR, USD)).toEqual(usdRate);
        expect(convert(2, EUR, USD)).toEqual(2 * usdRate);
        expect(convert(42.35, EUR, USD)).toEqual(42.35 * usdRate);
    });

    it('EUR -> GBP', () => {
        expect(convert(1, EUR, GBP)).toEqual(gbpRate);
        expect(convert(2, EUR, GBP)).toEqual(2 * gbpRate);
        expect(convert(42.35, EUR, GBP)).toEqual(42.35 * gbpRate);
    });

    it('USD -> EUR', () => {
        expect(convert(1 * usdRate, USD, EUR)).toEqual(1);
        expect(convert(2 * usdRate, USD, EUR)).toEqual(2);
        expect(convert(42.35 * usdRate, USD, EUR)).toEqual(42.35);
    });

    it('USD -> GBP', () => {
        expect(convert(1 * usdRate, USD, GBP)).toEqual(gbpRate);
        expect(convert(2 * usdRate, USD, GBP)).toEqual(2 * gbpRate);
        expect(convert(42.35 * usdRate, USD, GBP)).toEqual(42.35 * gbpRate);
    });

    it('GBP -> EUR', () => {
        expect(convert(1 * gbpRate, GBP, EUR)).toEqual(1);
        expect(convert(2 * gbpRate, GBP, EUR)).toEqual(2);
        expect(convert(42.35 * gbpRate, GBP, EUR)).toEqual(42.35);
    });

    it('GBP -> USD', () => {
        expect(convert(1 * gbpRate, GBP, USD)).toEqual(usdRate);
        expect(convert(2 * gbpRate, GBP, USD)).toEqual(2 * usdRate);
        expect(convert(42.35 * gbpRate, GBP, USD)).toEqual(42.35 * usdRate);
    });
});
