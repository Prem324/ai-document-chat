// Simple in-memory storage for document text
// In a production app, you might use a database or session-based storage.

let documentText = "";

module.exports = {
    setDocumentText: (text) => {
        documentText = text;
    },
    getDocumentText: () => {
        return documentText;
    },
    clearDocumentText: () => {
        documentText = "";
    }
};
