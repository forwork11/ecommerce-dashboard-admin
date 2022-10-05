import { message } from 'antd';
import axios from 'axios';
import API from '../constants/API';
import MESSAGE from '../constants/message';
import { getAuth, logout } from './utils';

const axiosInstance = axios.create({
    baseURL: API.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(config => {
    const auth = getAuth();
    if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`
    }
    return config;
})

axiosInstance.interceptors.response.use(res => res, err => {
    if (err.response?.status === 401 && 
        err.response?.data === MESSAGE.INVALID_TOKEN) {
            message.error(err.response.data);
            return logout();
        }
    return err.response;
})

export { axiosInstance };