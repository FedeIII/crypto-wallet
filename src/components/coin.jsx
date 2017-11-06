import React from 'react';

export function Coin (props) {
    return (
        <div className='coin'>
            <div className='coin__info'>{props.price}</div>
            <div className='coin__name'>{props.name}</div>
        </div>
    );
}
