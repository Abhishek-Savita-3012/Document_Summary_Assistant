# 📄 Document Summary Assistant

## 🚀 Overview
**Document Summary Assistant** is a full-stack application that allows users to:

- 📂 Upload **PDF or Image** documents  
- 🔎 Extract text using **PyPDF2** (for PDFs) or **Tesseract OCR** (for images)  
- 🤖 Generate an **AI-powered summary** of the extracted text using **Google Gemini API**  
- 📏 Choose summary length (**Short ~50 words, Medium ~150 words, Long ~300+ words**)  
- 💾 Download the summary as **TXT** or **PDF**  

This project demonstrates:

- ✅ Secure API key management via `.env`  
- ✅ Separation of concerns with **Frontend (HTML, CSS, JS)** and **Backend (Flask API)**  
- ✅ Clean, production-style architecture  

---

## 📂 Project Structure
document-summary-assistant/
│── backend/
│ ├── app.py # Flask backend API
│ ├── requirements.txt # Python dependencies
│ ├── .env # Gemini API Key (DO NOT COMMIT)
│
│── frontend/
│ ├── index.html # UI
│ ├── style.css # Styling
│ ├── script.js # Client-side logic
│
│── README.md # Documentation

## ⚙️ Tech Stack

### Frontend
- HTML, CSS, JavaScript  
- [jsPDF](https://github.com/parallax/jsPDF) (for exporting summary as PDF)  

### Backend
- Python 3 + Flask  
- Flask-CORS (to allow frontend-backend communication)  
- PyPDF2 (PDF text extraction)  
- Tesseract OCR (Image text extraction)  
- Pillow (Image processing)  
- Requests (Gemini API calls)  
- python-dotenv (secure API key loading)  

### AI/ML
- **Google Gemini API** (for summarization)  

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/document-summary-assistant.git
cd document-summary-assistant

### 2️⃣ Backend Setup

cd backend
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

-> pip install -r requirements.txt

-> Create a .env file inside backend/:
GEMINI_API_KEY=your_gemini_api_key_here

-> Run Flask server:
python app.py

-> Backend will start on → http://127.0.0.1:5000

### 3️⃣ Frontend Setup

cd frontend
open index.html   # Mac
start index.html  # Windows

### 📖 Usage

1) Open index.html in a browser
2) Upload a PDF or Image file
3) Choose summary length:

- Short (~50 words, only core ideas)
- Medium (~150 words, main points)
- Long (~300+ words, detailed explanation)

4) Click Generate Summary

5) View:

- Extracted text in the left section
- AI-generated summary in the right section
- Optionally download:
--- summary.txt
--- summary.pdf

### 🔐 API Key Security

- API key is stored in .env and never exposed to the frontend
- Flask securely calls Gemini API
- Ensure .env is ignored in .gitignore (never commit it)

### 🖼️ Screenshots (Optional)

You can add screenshots of:

Uploading a file

Extracted text display

Generated summary

Download buttons

### 📦 Requirements

- Python 3.8+
- Node.js
- Tesseract must be installed locally for OCR

-- Install Tesseract
Windows -> 
Download Installer

Linux/macOS ->
sudo apt-get install tesseract-ocr  # Debian/Ubuntu
brew install tesseract              # macOS

### 🚀 Deployment

-> Frontend: Deploy on Netlify, Vercel, or GitHub Pages

-> Backend: Deploy on Heroku, Render, or Railway

### ✅ Deliverables

- Working application (Frontend + Backend)
- GitHub Repository with source code
- Hosted URL (optional)
- This README

### 🏆 Author

Built by Abhishek Savita
