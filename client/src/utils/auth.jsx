import ROUTES from "../constants/routes";
import STORAGE from "../constants/storage";
import { getStorage, setStorage, delStorage } from "./storage";

export const getAuth = () => getStorage(STORAGE.AUTH);

export const setAuth = (value) => setStorage(STORAGE.AUTH, value);

export const delAuth = () => delStorage(STORAGE.AUTH);

export const logout = () => {
    delAuth();
    window.location = ROUTES.LOGIN;
}