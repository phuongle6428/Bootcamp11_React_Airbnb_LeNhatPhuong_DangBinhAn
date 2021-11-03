import axios from 'axios';
import qs from 'query-string'
const axiosClient = axios.create({
    baseURL: "https://airbnb.cybersoft.edu.vn",
    headers: {
        tokenByClass: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzIxNjAwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ3MzYzNjAwfQ.mOv5qM9N68AKpDxX9HZC3TaZNZaqfk-i1qO_Hcgf0RU"
    },
    paramsSerializer: (params) => {
        // Override lại cách axios set params lên url
        return qs.stringify(params, { skipEmptyString: true, skipNull: true });
    },
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    const authJson = localStorage.getItem("Auth")
    if(authJson) {
        const {token} = JSON.parse(authJson)
        config.headers.Authorization = `Bearer: ${token}`
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // const {message, user, token} = response.data
    // return {message, user, token};
    return response.data
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error.response.data.message);
});

export default axiosClient