const aiService = require('../services/aiService');
const memoryStorage = require('../utils/memoryStorage');

const handleChat = async (req, res) => {
    const { message } = req.body;
    const documentText = memoryStorage.getDocumentText();

    if (!documentText) {
        return res.status(400).json({ error: 'No document uploaded. Please upload a PDF first.' });
    }

    try {
        const response = await aiService.getAIResponse(documentText, message);
        res.json({ response });
    } catch (error) {
        console.error('Chat Controller Error:', error);
        res.status(500).json({ error: 'AI processing failed' });
    }
};

module.exports = {
    handleChat
};
