import axios from 'axios';

export const fxService = axios.create({
    baseURL: "https://fcsapi.com/api-v3/forex"
})

export const API_KEY = import.meta.env.VITE_APP_URL;
export const API_KEY_U = import.meta.env.VITE_APP_U;
export const API_KEY_D = import.meta.env.VITE_APP_D;
