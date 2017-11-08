import React from 'react';

import {Bar} from 'components/bar';
import {Variation} from 'components/variation';

function getModifier (variation) {
    if (variation === 0) return 'stable';
    if (variation > 0)   return 'rise';
    if (variation < 0)   return 'fall';
}

function renderPrice ({variation, barHeightRatio}, i) {
    const modifier = getModifier(variation);

    return (
        <div className='coin__price' key={i}>
            <Variation value={variation} modifier={modifier} />
            <Bar ratio={barHeightRatio} modifier={modifier} />
        </div>
    );
}

export function CoinHistory ({history}) {
    return (
        <div className='coin__history'>
            {history.map(renderPrice)}
        </div>
    );
}
