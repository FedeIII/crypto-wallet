import React from 'react';

import {CurrencySelectorContainer} from 'containers/currencySelector';
import {Coin} from 'components/coin';
import {BTC, ETH, LTC} from 'src/constants';

export function CryptoWallet () {
    return (
        <div className='coins'>
            <CurrencySelectorContainer />
            <Coin name={BTC}/>
            <Coin name={ETH}/>
            <Coin name={LTC}/>
        </div>
    );
}
