// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/API/auth/`, { email, password });
        if (response.data.token) {
            localStorage.setItem("accessToken", response.data.token.access);
            localStorage.setItem("refreshToken", response.data.token.refresh);
            return { success: true };
        }
        return { success: false };
    } catch (error) {
        const errorMessage = error.response && error.response.data ? error.response.data.msg : "An unexpected error occurred";
        return { success: false, message: errorMessage };
    }
};

export const fetchChatHistory = async () => {
    const response = await axios.get(`${API_URL}/chat-history`);
    return response.data;
};

export const sendMessage = async (message) => {
    const response = await axios.post(`${API_URL}/send-message`, { message });
    return response.data;
};
