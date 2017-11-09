import {formatVariation, formatCurrency} from 'utils/formatCoin';
import {USD, EUR, GBP} from 'src/constants';

describe('Format Coin Utils', () => {
    describe('#formatVariation', () => {
        it('should return empty string if variation is 0', () => {
            expect(formatVariation(0)).toEqual('');
        });

        it('should return positive variation formatted', () => {
            expect(formatVariation(0.3342)).toEqual('+33.42%');
        });

        it('should return negative variation formatted', () => {
            expect(formatVariation(-0.3342)).toEqual('-33.42%');
        });
    });

    describe('#formatCurrency', () => {
        it('formats EUR', () => {
            expect(formatCurrency(33.4256, EUR)).toEqual('33.43€');
        });

        it('formats USD', () => {
            expect(formatCurrency(33.4256, USD)).toEqual('$33.43');
        });

        it('formats GBP', () => {
            expect(formatCurrency(33.4256, GBP)).toEqual('£33.43');
        });
    });
});
