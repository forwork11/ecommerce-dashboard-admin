import ROUTES from "../constants/routes";
import STORAGE from "../constants/storage";

export const getAuth = () => getStorage(STORAGE.AUTH);

export const setAuth = (value) => setStorage(STORAGE.AUTH, value);

export const logout = () => {
    delStorage(STORAGE.AUTH);
    window.location = ROUTES.LOGIN;
}

export const getStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const delStorage = (key) => localStorage.removeItem(key);