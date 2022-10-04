import axios from 'axios';
import API from '../constants/API';
import STORAGE from '../constants/storage';
import { getStorage } from './utils';

const axiosInstance = axios.create({
    baseURL: API.BASE,
    headers: {
        'Content-Type': 'application/json'
    }
})

axiosInstance.interceptors.request.use(config => {
    const auth = getStorage(STORAGE.AUTH);
    if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`
    }
    return config;
})

export { axiosInstance };