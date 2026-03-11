import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

// To wake up the server (Render free tier)
export const pingServer = () => {
    // We can ping the root of the API (which is one level up from /api)
    // or just ping the /api endpoint if we add a handler for it.
    // Let's try pinging the root directory since it is already defined in server.js
    const baseUrl = API_BASE_URL.replace('/api', '');
    return axios.get(baseUrl);
};

export const uploadFiles = (files) => {
    const formData = new FormData();
    files.forEach(file => {
        formData.append('files', file);
    });
    return api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};

export const sendMessage = (message) => {
    return api.post('/chat', { message });
};

export default api;

