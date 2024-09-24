import axios from "axios";

export const axiosApi = axios.create({
    baseURL: process.env.APP_API_URL || ""
})

axiosApi.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
        return config
    }
);


// Тут ошибка, токен не передается
axiosApi.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = {...error.config};
        originalRequest._isRetry = true; 
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            try {
                const resp = await axiosApi.post(process.env.APP_API_URL_REFRESH || "");
                localStorage.setItem("token", resp.data.access);
                return axiosApi.request(originalRequest);
            } catch (error) {
                console.log("AUTH ERROR");
            }
        }
        throw error;
    }
);