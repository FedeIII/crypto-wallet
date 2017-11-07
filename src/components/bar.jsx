import React from 'react';

export function Bar ({ratio}) {
    let className = 'bar ';

    if      (ratio > 1) className += 'bar--10';
    else if (ratio < 0) className += 'bar--0';
    else                className += `bar--${ratio * 10}`;

    return (
        <div className={className}></div>
    );
}
