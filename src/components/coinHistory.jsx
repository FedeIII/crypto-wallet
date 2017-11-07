import React from 'react';

import {Bar} from 'components/bar';

function renderPrice ({price, barHeightRatio}, i) {
    return (
        <div className='coin__price' key={i}>
            <span className='coin__span'>{price}</span>
            <Bar ratio={barHeightRatio}/>
        </div>
    );
}

export function CoinHistory ({prices}) {
    return (
        <div className='coin__history'>
            {prices.map(renderPrice)}
        </div>
    );
}
