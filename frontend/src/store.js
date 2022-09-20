import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";


const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});

const carItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

const preloadedState = {
    cart: {cartItems: carItemsFromStorage},
};

const store = configureStore({
    reducer: reducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});

export default store;
