import {formatVariation} from 'utils/formatCoin';

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
});
