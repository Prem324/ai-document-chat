import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

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
