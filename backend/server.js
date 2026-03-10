const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const documentRoutes = require('./routes/documentRoutes');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send('AI Document Chat Application API is running');
});

// Use routes
app.use('/api', documentRoutes);
app.use('/api', chatRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
