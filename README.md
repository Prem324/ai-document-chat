# 📄 DocuChat AI

**DocuChat AI** is a full-stack web application that transforms how you interact with PDF documents. Upload any PDF and have natural conversations with its content using an AI-powered assistant. Perfect for research, analysis, Q&A workflows, and knowledge extraction.

---

## 🎯 What is DocuChat AI?

DocuChat AI combines intelligent document processing with conversational AI to create an intuitive interface for exploring PDF content. Instead of manually searching through pages, users can simply ask questions in natural language and get instant, context-aware answers grounded in the document.

**Use cases:**

- Research paper analysis and Q&A
- Contract and legal document review
- Business report summaries
- Educational document exploration
- Data sheet and specification lookups

---

## 🛠️ Tech Stack

### Backend

- **Node.js + Express** — RESTful API server with built-in CORS and JSON parsing
- **pdf-parse** — PDF text extraction and processing
- **OpenRouter API** — Seamless integration with LLMs (GPT, Claude, Deepseek, etc.)
- **Axios** — HTTP client for API communication
- **Multer** — File upload handling and storage
- **Dotenv** — Environment variable management
- **Nodemon** — Development hot-reload (dev only)

### Frontend

- **React 19** — Modern, efficient UI framework
- **Vite** — Lightning-fast build tool and dev server
- **Tailwind CSS** — Utility-first styling (v4.2.1)
- **Framer Motion** — Smooth animations and transitions
- **Lucide React** — Clean, consistent icon library
- **Axios** — HTTP client for backend communication
- **ESLint** — Code quality and consistency

### Infrastructure

- **Backend:** Deployable to Render, AWS Lambda, or any Node.js host
- **Frontend:** Deployable to Vercel, Netlify, or any static host

---

## ✨ Features

✅ **PDF Upload & Processing**

- Drag-and-drop file upload with real-time validation
- Automatic text extraction from PDFs
- Support for multi-page documents

✅ **Intelligent Chat Interface**

- Per-document conversation history
- Context-aware Q&A powered by LLMs
- Grounded responses (model instructed to cite document content)
- Streaming-ready architecture for real-time responses

✅ **Developer-Friendly**

- Pluggable AI model selection via environment variables
- OpenRouter integration (supports 200+ models)
- RESTful API for easy integration
- Clean, modular code structure

✅ **Production-Ready**

- CORS-enabled for cross-origin requests
- Error handling and graceful failures
- Environment-based configuration
- Scalable upload directory structure

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- **Node.js** 18+ (or current LTS)
- **npm** 9+
- An **OpenRouter API key** (get one free at [openrouter.ai](https://openrouter.ai))

### Step 1: Clone & Setup

```bash
git clone https://github.com/Prem324/ai-document-chat.git
cd ai-document-chat
```

### Step 2: Configure Backend

```powershell
cd backend

# Create .env file
echo "OPENROUTER_API_KEY=your_key_here`nAI_MODEL=openai/gpt-oss-20b`nPORT=5000" > .env

# Install dependencies
npm install

# Start development server
npm run dev
```

Backend runs at `http://localhost:5000` by default.

### Step 3: Configure Frontend (New Terminal)

```powershell
cd frontend

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:5000/api" > .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs at `http://localhost:5173` (Vite default). Open it in your browser.

### Step 4: Test It Out

1. Open `http://localhost:5173` in your browser
2. Click **"Upload PDF"** and select a PDF file
3. Once uploaded, type a question in the chat box
4. Get AI-powered answers grounded in the document!

---

## 📋 Environment Variables

### Backend

Create a `.env` file in the `backend/` directory:

```env
# Required: Your OpenRouter API key (get free at https://openrouter.ai)
OPENROUTER_API_KEY=sk-or-v1-xxxxx

# Optional: AI Model to use (defaults to openai/gpt-oss-20b)
AI_MODEL=openai/gpt-oss-20b

# Optional: Server port (defaults to 5000)
PORT=5000
```

**Popular models:**

- `openai/gpt-oss-20b` (free tier, reasonable quality)
- `openai/gpt-4` (most capable, paid)
- `anthropic/claude-3-sonnet` (good balance)
- `deepseek/deepseek-r1:free` (fast, free)

### Frontend

Create a `.env.local` file in the `frontend/` directory:

```env
# API base URL (includes /api path)
VITE_API_BASE_URL=http://localhost:5000/api

# For production deployment
# VITE_API_BASE_URL=https://your-backend-url.com/api
```

---

## 📂 Project Architecture

```
ai-document-chat/
├── backend/
│   ├── controllers/
│   │   ├── chatController.js        # Chat request handler
│   │   └── documentController.js    # Document upload/retrieval
│   ├── routes/
│   │   ├── chatRoutes.js            # POST /api/chat
│   │   └── documentRoutes.js        # POST /api/upload
│   ├── services/
│   │   ├── aiService.js             # OpenRouter API integration
│   │   └── pdfService.js            # PDF text extraction
│   ├── utils/
│   │   └── memoryStorage.js         # In-memory conversation store
│   ├── uploads/                     # User PDF storage (auto-created)
│   ├── server.js                    # Express app entry point
│   ├── package.json
│   └── .env                         # Environment variables (create locally)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatArea.jsx         # Main chat interface
│   │   │   ├── FileUploader.jsx     # PDF upload widget
│   │   │   ├── Header.jsx           # App header/branding
│   │   │   ├── MessageBubble.jsx    # Chat message display
│   │   │   └── SplashScreen.jsx     # Initial splash/welcome
│   │   ├── hooks/
│   │   │   └── useDocChat.js        # Custom hook for chat logic
│   │   ├── services/
│   │   │   └── api.js               # Axios instance & API calls
│   │   ├── App.jsx                  # Root component
│   │   ├── main.jsx                 # React entry point
│   │   ├── App.css & index.css      # Styling
│   │   └── assets/                  # Images, logos, etc.
│   ├── public/                      # Static files
│   ├── vite.config.js               # Vite build config
│   ├── tailwind.config.js           # Tailwind CSS config
│   ├── eslint.config.js             # ESLint rules
│   ├── package.json
│   ├── .env.local                   # Environment variables (create locally)
│   └── index.html                   # HTML entry point
│
├── MODEL_CARD.md                    # AI model documentation
├── README.md                        # This file
└── .gitignore                       # Git ignore rules
```

### Data Flow

```
User (Browser)
    ↓
    ├─→ FileUploader Component (frontend)
    │       ↓
    │   Upload PDF → Backend /api/documents/upload
    │       ↓
    │   documentController.js (multer file handling)
    │       ↓
    │   pdfService.js (extract text with pdf-parse)
    │       ↓
    │   memoryStorage.js (store doc + text)
    │
    ├─→ ChatArea Component (frontend)
    │       ↓
    │   User Question → Backend /api/chat
    │       ↓
    │   chatController.js (retrieve doc from memory)
    │       ↓
    │   aiService.js (call OpenRouter API)
    │       ↓
    │   Response ← Display in MessageBubble
```

---

## 🌐 Deployment

### Backend: Deploy to Render

1. **Create Account** — Sign up at [render.com](https://render.com)
2. **New Web Service** — Click `New +` → `Web Service`
3. **Connect Repository** — Link your GitHub repo
4. **Configure:**
   - **Name:** `docuchat-backend`
   - **Root Directory:** `backend` ⚠️ Important!
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. **Environment Variables** (Click `Advanced`):
   ```
   OPENROUTER_API_KEY = sk-or-v1-xxxxx
   AI_MODEL = openai/gpt-oss-20b
   PORT = 5000
   ```
6. **Deploy** — Click `Create Web Service`

Your backend URL will be something like: `https://docuchat-backend.onrender.com`

### Frontend: Deploy to Vercel

1. **Create Account** — Sign up at [vercel.com](https://vercel.com)
2. **Import Project** — Click `Add New` → `Project` → Import your repo
3. **Configure:**
   - **Root Directory:** `frontend`
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. **Environment Variables:**
   ```
   VITE_API_BASE_URL = https://docuchat-backend.onrender.com/api
   ```
5. **Deploy** — Click `Deploy`

Your frontend URL will be something like: `https://docuchat-ai.vercel.app`

---

## 🔧 Available Commands

### Backend

```powershell
# Development (with hot-reload)
npm run dev

# Production
npm start

# Run tests (not yet implemented)
npm test
```

### Frontend

```powershell
# Development (Vite dev server)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm preview

# Lint code
npm run lint
```

---

## 🛡️ Security & Best Practices

⚠️ **Before Production:**

- **API Keys** — Never commit `OPENROUTER_API_KEY` to git. Use `.env` (gitignored) or CI/CD secrets.
- **File Storage** — PDFs stored in `backend/uploads/` by default. Implement:
  - Automatic cleanup (e.g., delete files after X hours)
  - User authentication and file access control
  - Virus scanning for uploaded files
- **Rate Limiting** — Add rate limits to prevent abuse (consider using `express-rate-limit`)
- **CORS** — Currently open; restrict to your frontend domain in production:
  ```javascript
  app.use(cors({ origin: "https://your-frontend.com" }));
  ```
- **Input Validation** — Validate PDF file size, format, and content length before processing
- **Error Handling** — Avoid exposing internal error messages to clients

See `MODEL_CARD.md` for AI safety and limitations.

---

## 🐛 Troubleshooting

**Port Already in Use**

```powershell
# Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

**API Key Errors**

- Verify `OPENROUTER_API_KEY` is set and valid
- Check OpenRouter account has credits/free tier active
- Test API key directly: `curl -H "Authorization: Bearer YOUR_KEY" https://openrouter.ai/api/v1/models`

**PDF Upload Fails**

- Ensure `backend/uploads/` directory exists (auto-created by multer)
- Check file size isn't too large
- Verify PDF isn't corrupted: try opening it locally first

**Frontend Can't Connect to Backend**

- Ensure backend is running (`npm run dev` in `backend/`)
- Verify `VITE_API_BASE_URL` matches backend URL
- Check browser console (F12) for CORS errors
- Disable browser cache (DevTools → Network → Disable cache)

---

## 📚 Additional Resources

- **OpenRouter Docs** — https://openrouter.ai/docs
- **Express.js Guide** — https://expressjs.com
- **React Docs** — https://react.dev
- **Vite Guide** — https://vitejs.dev
- **Tailwind CSS** — https://tailwindcss.com
- **pdf-parse** — https://www.npmjs.com/package/pdf-parse

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m "Add your feature"`
4. **Push** to your branch: `git push origin feature/your-feature`
5. **Open** a Pull Request with a clear description

Please ensure:

- Code is linted (`npm run lint` in frontend)
- Changes are well-documented
- New features include basic tests where applicable

---

**Happy building!** 🎉 Upload a PDF, ask a question, and let AI do the heavy lifting.
