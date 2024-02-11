import axios from "axios";

const apiKey = '0790c0412247a2c96cc97c19630239e1';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: apiKey
    }
});

export default axiosInstance;
