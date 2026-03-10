const express = require('express');
const router = express.Router();
const multer = require('multer');
const documentController = require('../controllers/documentController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.array('files', 10), documentController.uploadDocument);

module.exports = router;
