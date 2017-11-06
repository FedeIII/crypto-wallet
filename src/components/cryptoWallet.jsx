import React from 'react';

import {CoinContainer} from 'containers/coin';
import {BTC, ETH, LTC} from 'src/constants';

export function CryptoWallet () {
    return (
        <div>
            <CoinContainer name={BTC}/>
            <CoinContainer name={ETH}/>
            <CoinContainer name={LTC}/>
        </div>
    );
}
