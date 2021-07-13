import * as api from "../api";
import { FETCH_ALL } from '../constants';

export const getProducts = (query) => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts(query);

        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
};