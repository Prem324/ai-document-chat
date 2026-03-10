const fs = require('fs');
const pdfService = require('../services/pdfService');
const memoryStorage = require('../utils/memoryStorage');

const uploadDocument = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }

        let combinedText = '';

        for (const file of req.files) {
            const text = await pdfService.extractTextFromPDF(file.path);
            combinedText += `\n--- Document: ${file.originalname} ---\n${text}\n`;

            // Clean up uploaded file
            fs.unlinkSync(file.path);
        }

        // Store in memory
        memoryStorage.setDocumentText(combinedText);

        res.json({
            message: `${req.files.length} file(s) uploaded and processed successfully`,
            textPreview: combinedText.substring(0, 200) + '...'
        });
    } catch (error) {
        console.error('Document Controller Error:', error);
        res.status(500).json({ error: 'Failed to process documents' });
    }
};

module.exports = {
    uploadDocument
};
