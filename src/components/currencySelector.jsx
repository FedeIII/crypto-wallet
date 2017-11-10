import React from 'react';

import {currencies} from 'src/constants';

function getSpanClass (loading) {
    return 'currency-selector__span' + (loading ? ' currency-selector__span--loading' : '');
}

function getSelectClass (loading) {
    return 'currency-selector__options' +
        (loading ? ' currency-selector__options--loading' : '');
}

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

export function CurrencySelector ({currency, loading, onSelect}) {
    const spanClass = getSpanClass(loading);
    const selectClass = getSelectClass(loading);

    return (
        <div className='currency-selector'>
            <span className={spanClass}>Change reference currency</span>
            <select
                className={selectClass}
                name='select'
                value={currency}
                onChange={onSelect}
                disabled={loading}
            >
                {renderOptions()}
            </select>
        </div>
    );
}
