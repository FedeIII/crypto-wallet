import React from 'react';

import {Bar} from 'components/bar';
import {Variation} from 'components/variation';

function getModifier (variation) {
    if (variation === 0) return 'stable';
    if (variation > 0)   return 'rise';
    if (variation < 0)   return 'fall';
}

export function CoinCurrent ({variation, barHeightRatio}) {
    const modifier = getModifier(variation);

    return (
        <div className='coin__current'>
            <Variation value={variation} modifier={modifier} single/>
            <Bar ratio={barHeightRatio} modifier={modifier} single/>
        </div>
    );
}
