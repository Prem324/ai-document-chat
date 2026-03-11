# 📄 DocuChat AI

DocuChat AI is a premium, full-stack application that allows users to upload PDF documents and have intelligent conversations with them.

---

## 🌐 Deployment Guide

### 1. Backend: Deploying to [Render](https://render.com)
The backend manages PDF processing and AI communication.

1.  **Create a New Web Service**: Log in to Render and click `New +` -> `Web Service`.
2.  **Connect GitHub**: Select the repository containing your project.
3.  **Configure Settings**:
    *   **Name**: `docuchat-backend` (or your choice).
    *   **Root Directory**: `backend` (Crucial! Do not leave empty).
    *   **Runtime**: `Node`.
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
4.  **Environment Variables**: Click `Advanced` -> `Add Environment Variable`:
    *   `OPENROUTER_API_KEY`: Your key from OpenRouter.
    *   `AI_MODEL`: `deepseek/deepseek-r1:free` (Optional, defaults in code).
5.  **Copy URL**: Once deployed, copy the provided URL (e.g., `https://docuchat-api.onrender.com`).

---

### 2. Frontend: Deploying to [Vercel](https://vercel.com)
The frontend provides the premium chat interface.

1.  **Import Project**: Log in to Vercel, click `Add New` -> `Project`, and import your repo.
2.  **Configure Settings**:
    *   **Root Directory**: `frontend`.
    *   **Framework Preset**: `Vite`.
3.  **Environment Variables**: Expand the environment variables section and add:
    *   `VITE_API_BASE_URL`: Paste your **Render Backend URL** followed by `/api` 
        *(Example: `https://docuchat-api.onrender.com/api`)*.
4.  **Deploy**: Click `Deploy`. 

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
