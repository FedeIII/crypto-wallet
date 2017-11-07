import React from 'react';

function getClassName (ratio, single) {
    let className = 'bar';

    if (single) className += ' bar--single';

    if      (ratio > 1) className += ' bar--10';
    else if (ratio < 0) className += ' bar--0';
    else                className += ` bar--${ratio * 10}`;

    return className;
}

export function Bar ({ratio, single}) {
    return (
        <div className={getClassName(ratio, single)}></div>
    );
}
