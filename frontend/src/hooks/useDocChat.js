import { useState } from 'react';
import { uploadFiles, sendMessage as sendChatMessage } from '../services/api';

export const useDocChat = () => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [documentReady, setDocumentReady] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileUpload = async (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length === 0) return;

        setFiles(selectedFiles);
        setUploading(true);

        try {
            await uploadFiles(selectedFiles);
            setDocumentReady(true);
            const message = selectedFiles.length === 1
                ? `Success! I've read "${selectedFiles[0].name}".`
                : `Success! I've read ${selectedFiles.length} documents.`;
            setMessages([{ role: 'ai', content: `${message} Ask me anything about them!` }]);
        } catch (error) {
            console.error('Upload failed:', error);
            alert('Failed to upload and process PDF(s).');
        } finally {
            setUploading(false);
        }
    };

    const handleSendMessage = async (input, setInput) => {
        if (!input.trim() || loading || !documentReady) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await sendChatMessage(input);
            const aiMessage = { role: 'ai', content: response.data.response };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error('Chat failed:', error);
            setMessages((prev) => [...prev, { role: 'ai', content: 'Sorry, I encountered an error processing your request.' }]);
        } finally {
            setLoading(false);
        }
    };

    const resetChat = () => {
        setMessages([]);
        setFiles([]);
        setDocumentReady(false);
    };

    return {
        files,
        uploading,
        documentReady,
        messages,
        loading,
        handleFileUpload,
        handleSendMessage,
        resetChat
    };
};
