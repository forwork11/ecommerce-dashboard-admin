import API from '../constants/API';
import { axiosInstance } from '../utils/useApi';

export const getProducts = async () => {
    try{
        const result = await axiosInstance({
            method: 'get',
            url: API.PRODUCTS,
        })
        return result
    } catch (e) {
        return e.response;
    }
}

export const addProduct = async (payload) => {
    try{
        const result = await axiosInstance({
            method: 'post',
            url: `${API.PRODUCTS}${API.CREATE}`,
            data: payload
        })
        return result
    } catch (e) {
        return e.response;
    }
}

export const updateProduct = async (id, payload, callback) => {
    try {
        const result = await axiosInstance({
            method: 'put',
            url: `${API.PRODUCTS}/${id}`,
            data: payload
        })
        return result
    } catch (e) {
        return e.response;
    }
}

export const deleteProduct = async (id) => {
    try {
        const result = await axiosInstance({
            method: 'delete',
            url: `${API.PRODUCTS}/${id}`,
        })
        return result
    } catch (e) {
        return e.response;
    }
}