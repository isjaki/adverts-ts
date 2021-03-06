import { ProductState } from '../../typings/products';
import { Action } from '../../typings/global';

import {
    FETCH_PRODUCT_INFO_START,
    FETCH_PRODUCT_INFO_FAIL,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_SELLERS_SUCCESS,
} from '../actionTypes';

const initialState: ProductState = {
    products: [],
    sellers: {},
    loading: false,
    error: false,
}

const fetchProductInfoStart = (state: ProductState): ProductState => ({
    ...state,
    loading: true,
    error: false,
});

const fetchProductInfoFail = (state: ProductState): ProductState => ({
    ...state,
    loading: false,
    error: true,
});

const fetchProductsSuccess = (state: ProductState, action: Action): ProductState => ({
    ...state,
    loading: false,
    products: action.products,
});

const fetchSellersSuccess = (state: ProductState, action: Action): ProductState => ({
    ...state,
    sellers: action.sellers,
});

const reducer = (state: ProductState = initialState, action: Action): ProductState => {
    switch (action.type) {
        case FETCH_PRODUCT_INFO_START:
            return fetchProductInfoStart(state);
        case FETCH_PRODUCT_INFO_FAIL:
            return fetchProductInfoFail(state);
        case FETCH_SELLERS_SUCCESS:
            return fetchSellersSuccess(state, action);
        case FETCH_PRODUCTS_SUCCESS:
            return fetchProductsSuccess(state, action);
        default: 
            return state;
    }
};

export default reducer;
