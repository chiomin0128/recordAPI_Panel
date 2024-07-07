import Cookies from "js-cookie";
import axios from "axios";

// axios 인스턴스를 생성합니다.
const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/", // 서버 포트 예: http://localhost:8000/
});

// 요청 인터셉터를 설정하여 요청 시 헤더에 토큰을 추가합니다.
instance.interceptors.request.use(
    config => {
        const token = Cookies.get('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터를 설정하여 401 오류가 발생하면 토큰을 갱신합니다.
instance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newToken = await refreshToken();
                Cookies.set('accessToken', newToken.access);
                instance.defaults.headers.common['Authorization'] = `Bearer ${newToken.access}`;
                return instance(originalRequest);
            } catch (e) {
                return Promise.reject(e);
            }
        }
        return Promise.reject(error);
    }
);

// 토큰을 갱신하는 함수입니다.
const refreshToken = async () => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/API/auth/refresh/', {
            refresh: Cookies.get('refreshToken')
        });
        return response.data;
    } catch (error) {
        throw new Error('Token refresh failed');
    }
};

export default instance;
