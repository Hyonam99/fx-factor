import axios from 'axios';

export const fxService = axios.create({
    baseURL: "https://fcsapi.com/api-v3/forex"
})

export const API_KEY = "pg40CTCElH8QqLDMWVxawY8VT"
