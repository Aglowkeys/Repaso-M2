import axios from 'axios';
import { ADD_TO_CART, GET_PRODUCTS, REMOVE_FROM_CART } from './constantes';

export const getProducts = () => {
  return (dispatch) => {
    axios('https://fakestoreapi.com/products')
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        })
      })
  }
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}
