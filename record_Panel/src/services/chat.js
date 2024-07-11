import axios from "@/services/API_utils"; // services 폴더의 chat.js 파일을 import 합니다.

/**
 * @description 사용자 채팅 설정 생성
 */
export const createUserSettings = async (settings) => {
    try {
        const response = await axios.post('/Chat/api/user-settings/', settings);
        return response.data;
    } catch (error) {
        console.error('Error creating user settings:', error);
        throw error;
    }
};
