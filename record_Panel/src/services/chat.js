import axios from "@/services/API_utils"; // services 폴더의 chat.js 파일을 import 합니다.

class APIUtils {
    /**
     * @description 사용자 채팅 설정 요청
     * @param {boolean} isGet - true일 경우 GET 요청, false일 경우 POST 요청
     * @param {object} [settings] - POST 요청일 경우 전송할 데이터
     */
    static async userSettings(isGet, settings = null) {
        try {
            if (isGet) {
                const response = await axios.get('/Chat/api/user-settings/');
                return response.data;
            } else {
                
                const response = await axios.post('/Chat/api/user-settings/', settings);

                return response.data;
            }
        } catch (error) {
            console.error(`Error ${isGet ? 'fetching' : 'creating'} user settings:`, error);
            throw error;
        }
    }
        /**
     * @description 사용자 채팅 설정 요청
     * @param {boolean} isGet - true일 경우 GET 요청, false일 경우 POST 요청
     * @param {object} [settings_id] - POST 요청일 경우 전송할 데이터
     */
        static async ChatRoom(isGet, settings_id = null) {
            try {
                if (isGet) {
                    const response = await axios.get('/Chat/api/user-room/');
                    return response.data;
                } else {
                    const response = await axios.post('/Chat/api/user-room/', { settings_id: settings_id });
    
                    return response.data;
                }
            } catch (error) {
                console.error(`Error ${isGet ? 'fetching' : 'creating'} user settings:`, error);
                throw error;
            }
        }    
}

export default APIUtils;