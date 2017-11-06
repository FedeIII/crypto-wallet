import {formatPrice} from 'utils/formatPrice';

describe('Format Price', () => {
    it('with integers', () => {
        expect(formatPrice(42)).toEqual(42);
    });

    it('with one decimal', () => {
        expect(formatPrice(42.1)).toEqual(42.1);
    });

    it('with two decimals', () => {
        expect(formatPrice(42.11)).toEqual(42.11);
    });

    it('with more than two decimals', () => {
        expect(formatPrice(42.1175)).toEqual(42.12);
    });
});
