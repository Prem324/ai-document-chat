# 📄 DocuChat AI

DocuChat AI is a premium, full-stack application that allows users to upload PDF documents and have intelligent conversations with them.

---

## 🚀 Separate Deployment Setup

To deploy this application separately, follow the instructions for the Backend and Frontend components below.

### 1. Backend Deployment (e.g., Render, Railway, Heroku)
The backend handles PDF processing and AI communication.

- **Root Directory**: `backend/`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `PORT`: (Optional, usually 5000)
  - `OPENROUTER_API_KEY`: Your OpenRouter API key.
  - `AI_MODEL`: `deepseek/deepseek-r1:free` or chosen model.

### 2. Frontend Deployment (e.g., Vercel, Netlify, Cloudflare Pages)
The frontend provides the premium chat interface.

- **Root Directory**: `frontend/`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_BASE_URL`: The URL of your **deployed backend** (e.g., `https://your-backend.onrender.com/api`).

---

## 🛠️ Local Development

1. **Backend**:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

---

## 📂 Project Structure
```text
backend/             # Express API (Deploy separately)
frontend/            # React App (Deploy separately)
```
