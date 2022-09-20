import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {addToCart} from "../actions/cartActions";

export const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const params = useParams();
    const [searchParam] = useSearchParams();// Looking for query params by name
    const productId = params.id;
    const qty = searchParam.get('qty') ? Number(searchParam.get('qty')) : 1;


    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);


    return (
        <div>
            Cart screen
        </div>
    );
};

