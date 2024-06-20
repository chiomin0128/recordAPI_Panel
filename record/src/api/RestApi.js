// src/api.js
import axios from 'axios';

const API_URL = 'http://your-api-url.com'; 

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

export const fetchChatHistory = async () => {
    const response = await axios.get(`${API_URL}/chat-history`);
    return response.data;
};

export const sendMessage = async (message) => {
    const response = await axios.post(`${API_URL}/send-message`, { message });
    return response.data;
};
