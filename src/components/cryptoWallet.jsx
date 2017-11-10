import React from 'react';

import {CurrencySelectorContainer} from 'containers/currencySelector';
import {CoinContainer} from 'containers/coin';
import {BTC, ETH, LTC} from 'src/constants';

export function CryptoWallet () {
    return (
        <div className='coins'>
            <CurrencySelectorContainer />
            <CoinContainer name={BTC}/>
            <CoinContainer name={ETH}/>
            <CoinContainer name={LTC}/>
        </div>
    );
}
