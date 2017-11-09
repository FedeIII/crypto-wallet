import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import styles from 'styles/main.scss';

import {App} from 'src/app';

const app = App({
    ReactDOM,
    createStore,
    applyMiddleware,
    thunk,
    Provider
});

app.startCoinsFetch();
