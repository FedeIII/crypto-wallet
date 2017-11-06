import React from 'react';

function renderPrice (price, i) {
    return (
        <div className='coin__price' key={i}>
            {price}
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
