import API from '../constants/api';
import { axiosInstance } from '../utils/api';

export const login = async (payload) => {
    try{
        const result = await axiosInstance({
            method: 'post',
            url: API.LOGIN,
            data: payload
        })
        return result
    } catch (e) {
        return e.response;
    }
}