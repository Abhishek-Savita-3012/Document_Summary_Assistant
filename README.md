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
<pre>
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
</pre>

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

git clone https://github.com/Abhishek-Savita-3012/document-summary-assistant.git <br>
cd document-summary-assistant<br>

### 2️⃣ Backend Setup

cd backend <br>
python -m venv venv <br>
source venv/bin/activate   # Mac/Linux <br>
venv\Scripts\activate      # Windows <br>
<br>
-> pip install -r requirements.txt
<br>
-> Create a .env file inside backend/: <br>
GEMINI_API_KEY=your_gemini_api_key_here
<br>
-> Run Flask server:
python app.py
<br>
-> Backend will start on → http://127.0.0.1:5000

### 3️⃣ Frontend Setup

cd frontend <br>
open index.html   # Mac <br>
start index.html  # Windows <br>

### 📖 Usage

1) Open index.html in a browser
2) Upload a PDF or Image file
3) Choose summary length:

- Short (~50 words, only core ideas)
- Medium (~150 words, main points)
- Long (~300+ words, detailed explanation)
<br><br>
4) Click Generate Summary
<br><br>
5) View:
<br><br>
- Extracted text in the left section
- AI-generated summary in the right section
- Optionally download: <br>
--- summary.txt <br>
--- summary.pdf <br>

### 🔐 API Key Security

- API key is stored in .env and never exposed to the frontend
- Flask securely calls Gemini API
- Ensure .env is ignored in .gitignore (never commit it)

### 📦 Requirements

- Python 3.8+
- Node.js
- Tesseract must be installed locally for OCR
<br><br>
-- Install Tesseract
Windows -> <br>
Download Installer
<br><br>
Linux/macOS -> <br>
sudo apt-get install tesseract-ocr  # Debian/Ubuntu <br>
brew install tesseract              # macOS <br>

### 🚀 Deployment

-> Frontend: Deploy on Netlify, Vercel, or GitHub Pages
<br>
-> Backend: Deploy on Heroku, Render, or Railway

### ✅ Deliverables

- Working application (Frontend + Backend)
- GitHub Repository with source code
- Hosted URL (optional)
- This README

### 🙋‍♂️ Author
Abhishek Savita
GitHub: @Abhishek-Savita-3012

### 📄 License
This project is licensed under the MIT License

