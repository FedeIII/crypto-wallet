import React from 'react';

import {formatVariation} from 'utils/formatCoin';

function getClassName (modifier, single) {
    let className = `coin__span coin__span--${modifier}`;
    if (single) className += ' coin__span--single';

    return className;
}

export function Variation ({value, modifier, single}) {
    return (
        <span className={getClassName(modifier, single)}>
            {formatVariation(value)}
        </span>
    );
}
