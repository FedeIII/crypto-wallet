import React from 'react';

function getClassName (ratio, modifier, single) {
    let className = 'bar';

    if (single) className += ' bar--single';

    if      (ratio > 1) className += ' bar--10';
    else if (ratio < 0) className += ' bar--0';
    else                className += ` bar--${ratio * 10}`;

    return `${className} bar--${modifier}`;
}

export function Bar ({ratio, modifier, single}) {
    return (
        <div className={getClassName(ratio, modifier, single)}></div>
    );
}
