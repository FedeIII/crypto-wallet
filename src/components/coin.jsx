import React from 'react';

import {PriceLinesContainer} from 'containers/priceLines';
import {CoinHistoryContainer} from 'containers/coinHistory';
import {CoinCurrentContainer} from 'containers/coinCurrent';
import {formatCurrency} from 'utils/formatCoin';

export function Coin ({name, price, currency}) {
    return (
        <div className='coin'>
            <div className='coin__info'>
                <PriceLinesContainer name={name}/>
                <CoinHistoryContainer name={name}/>
                <CoinCurrentContainer name={name}/>
            </div>
            <div className='coin__name'>
                <div className='coin__symbol'>
                    <span>{name}</span>
                </div>
                <div className='coin__current-price'>
                    {formatCurrency(price, currency)}
                </div>
            </div>
        </div>
    );
}
