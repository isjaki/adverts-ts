import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime';

import favorites from './store/reducers/favorites';
import products from './store/reducers/products';
import filters from './store/reducers/filters';
import sorting from './store/reducers/sorting';
import { rootSaga } from './store/sagas/index';

import App from './App';
import './index.scss';

const reducer = combineReducers({
    favorites,
    products,
    filters,
    sorting,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
