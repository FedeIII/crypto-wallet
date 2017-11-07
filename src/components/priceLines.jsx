import React from 'react';

function renderMaxLine (max) {
    return renderLine(max, 'max');
}

function renderMidLine (mid) {
    return renderLine(mid, 'mid');
}

function renderMinLine (min) {
    return renderLine(min, 'min');
}

function renderLine (value, modifier) {
    if (value) {
        return (
            <div className={`price-lines__line price-lines__line--${modifier}`}>
                <span className='price-lines__span'>{value}</span>
            </div>
        );
    }
}

export function PriceLines ({max, mid, min}) {
    return (
        <div className='price-lines'>
            {renderMaxLine(max)}
            {renderMidLine(mid)}
            {renderMinLine(min)}
        </div>
    );
}
