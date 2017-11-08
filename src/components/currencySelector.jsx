import React from 'react';

import {currencies} from 'src/constants';

function renderOption (option, i) {
    return (
        <option className='currency-selector__option' value={option} key={i}>
            {option}
        </option>
    );
}

function renderOptions () {
    return currencies.map(renderOption);
}

export function CurrencySelector ({currency, onSelect}) {
    return (
        <div className='currency-selector'>
            <span className='currency-selector__span'>Change reference currency</span>
            <select
                className='currency-selector__options'
                name='select'
                value={currency}
                onChange={onSelect}
            >
                {renderOptions()}
            </select>
        </div>
    );
}
