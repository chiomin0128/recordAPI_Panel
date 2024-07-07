import instance from "./api";

// 사용자 정보를 가져오는 함수입니다.
export const getUserInfo = async () => {
    try {
        const response = await instance.get('/API/auth/');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch user info:", error);
        throw error;
    }
};

