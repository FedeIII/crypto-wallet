import React from 'react';

function getCoinInfo (price) {
    if (price) {
        return (
            <div className='coin__info'>{price}</div>
        );
    }
}

export function Coin (props) {
    return (
        <div className='coin'>
            {getCoinInfo(props.price)}
            <div className='coin__name'>{props.name}</div>
        </div>
    );
}
