import React from 'react';

import {CoinHistoryContainer} from 'containers/coinHistory';
import {CoinCurrentContainer} from 'containers/coinCurrent';

export function Coin ({name}) {
    return (
        <div className='coin'>
            <div className='coin__info'>
                <CoinHistoryContainer name={name}/>
                <CoinCurrentContainer name={name}/>
            </div>
            <div className='coin__name'>{name}</div>
        </div>
    );
}
