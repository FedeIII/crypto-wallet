import React from 'react';

import {Bar} from 'components/bar';

export function CoinCurrent ({price, barHeightRatio}) {
    return (
        <div className='coin__current'>
            <span className='coin__span'>{price}</span>
            <Bar ratio={barHeightRatio}/>
        </div>
    );
}
