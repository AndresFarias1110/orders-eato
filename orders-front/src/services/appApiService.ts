import axios from "axios";
import { AppAlert } from "../components/AppAlert/AppAlert";

const baseURL = "http://localhost:4000";
export const appApi = axios.create({
    baseURL,
});

appApi.interceptors.response.use(response => response, error => {
    if (typeof error?.response?.data?.message  === 'string') {
        new AppAlert(error?.response?.data?.message, 0);
    } else {
        new AppAlert('Ha ocurrido un error, estamos trabajando para resolverlo.', 0);
    }
    return Promise.reject(error);
});