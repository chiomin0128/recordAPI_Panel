    import Cookies from "js-cookie";
    import axios from "./API_utils"; // services 폴더의 api.js 파일을 import 합니다.


    /**
     * @description 토큰을 저장하는 함수
     */
    const saveTokens = (access, refresh) => {
        Cookies.set("accessToken", access, { expires: 1 }); // access token을 쿠키에 저장
        Cookies.set("refreshToken", refresh, { expires: 7 }); // refresh token을 쿠키에 저장
    };

    /**
     * @description 로그인 함수
     */
    // 로그인 함수
    export const login = async (email, password) => {
        try {
            const response = await axios.post("/API/auth/", { email, password });

            if (!response.data) {
                throw new Error("Login failed");
            }

            const { accessToken, refreshToken } = response.data.token;
            saveTokens(accessToken, refreshToken);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.msg) {
                throw new Error(error.response.data.msg);
            } else {
                throw new Error("Login failed");
            }
        }
    };

    /**
     * @description 로그아웃 함수
     */
    export const logout = () => {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        window.location.href = "/"; // 로그아웃 성공 시 메인 페이지로 이동

    };



    /**
     * @description 액세스 토큰이 있는지 확인하는 함수
     */
    export const isAuthenticated = () => {
        return !!Cookies.get("accessToken");
    };

    /**
     * @description 사용자 정보를 가져오는 함수입
     */
    export const getUserInfo = async () => {
        try {
            const response = await axios.get('/API/auth/');
            return response.data;
        } catch (error) {
            console.error("Failed to fetch user info:", error);
            throw error;
        }
    };


