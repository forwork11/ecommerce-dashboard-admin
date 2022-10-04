import API from '../constants/API';
import { axiosInstance } from '../utils/useApi';

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