import {roundTwoDecimals, roundOneDecimal, getMinMaxRatio} from 'utils/numbers';

describe('Numbers Utils', () => {
    describe('round two decimals', () => {
        it('with integers', () => {
            expect(roundTwoDecimals(42)).toEqual(42);
        });

        it('with one decimal', () => {
            expect(roundTwoDecimals(42.1)).toEqual(42.1);
        });

        it('with two decimals', () => {
            expect(roundTwoDecimals(42.11)).toEqual(42.11);
        });

        it('with more than two decimals', () => {
            expect(roundTwoDecimals(42.1175)).toEqual(42.12);
        });
    });

    describe('round one decimal', () => {
        it('with integers', () => {
            expect(roundOneDecimal(42)).toEqual(42);
        });

        it('with one decimal', () => {
            expect(roundOneDecimal(42.1)).toEqual(42.1);
        });

        it('with more than one decimal', () => {
            expect(roundOneDecimal(42.1175)).toEqual(42.1);
        });
    });

    describe('get min max ratio', () => {
        it('should return 1 for same min and max', () => {
            expect(getMinMaxRatio('any number', 3, 3)).toEqual(1);
        });

        it('should return 0 for 1 in [1, 5]', () => {
            expect(getMinMaxRatio(1, 5, 1)).toEqual(0);
        });

        it('should return 0.3 for 2 in [1, 5]', () => {
            expect(getMinMaxRatio(2, 5, 1)).toEqual(0.3);
        });

        it('should return 0.5 for 3 in [1, 5]', () => {
            expect(getMinMaxRatio(3, 5, 1)).toEqual(0.5);
        });

        it('should return 0.8 for 4 in [1, 5]', () => {
            expect(getMinMaxRatio(4, 5, 1)).toEqual(0.8);
        });

        it('should return 1 for 5 in [1, 5]', () => {
            expect(getMinMaxRatio(5, 5, 1)).toEqual(1);
        });
    });
});
