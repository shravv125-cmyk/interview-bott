# 🤖 AI Interview Preparation Bot

An AI-powered web application that helps users prepare for interviews using **Resume Analysis + RAG + Mock Interviews + JD Match + Career Chatbot**.

Built with **Flask, Python, MySQL, HTML/CSS/JS, Groq API**

---

# 🚀 Features

## 🔐 Authentication

* User Registration
* Login / Logout
* Forgot Password / Reset Password

## 📄 Resume Upload + Parsing

* Upload PDF Resume
* Extract text automatically
* Store resume data securely

## 🧠 AI Personalized Questions

* Generates interview questions based on:

  * Resume content
  * Target role

## 💬 AI Career Coach Chatbot

Ask questions like:

* How can I improve my resume?
* What should I study for Python Developer role?
* Explain Flask interview questions

Uses **RAG (Retrieval Augmented Generation)** for smarter responses.

## 🎯 JD Match Analyzer

Compare your resume with a Job Description.

Outputs:

* Match Score
* Matching Skills
* Missing Skills
* Suggestions

## 🎤 AI Mock Interview

* AI asks interview questions one-by-one
* User answers
* AI evaluates performance

## 📊 Results Dashboard

Shows:

* Overall Score
* Confidence
* Communication
* Technical Accuracy
* Feedback

---

# 🛠️ Tech Stack

## Backend

* Python
* Flask

## Frontend

* HTML
* CSS
* JavaScript

## Database

* MySQL

## AI

* Groq API (Llama 3.1)

## RAG Components

* Resume Chunking
* Vector Search
* Semantic Retrieval

---

# 📂 Project Structure

```bash
AI-Interview-Bot/
│── app.py
│── requirements.txt
│── Procfile
│── .env
│
├── templates/
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── upload.html
│   ├── chat.html
│   ├── questions.html
│   ├── mock.html
│   ├── results.html
│   ├── jd_match.html
│   ├── forgot_password.html
│   └── reset_password.html
│
├── static/
│   └── style.css
│
├── uploads/
│
└── utils/
    ├── parser.py
    ├── rag.py
    └── agent.py
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/ai-interview-bot.git
cd ai-interview-bot
```

## 2️⃣ Install Requirements

```bash
pip install -r requirements.txt
```

## 3️⃣ Create `.env`

```env
API=your_groq_api_key
SECRET_KEY=your_secret_key

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=ai_interview_bot
```

## 4️⃣ Run App

```bash
python app.py
```

---

# 🌐 Deployment

Ready to deploy on:

* Render
* Railway
* PythonAnywhere

---

# 📌 Future Improvements

* OTP Email Reset Password
* Voice Mock Interview
* Resume Scorecard
* Admin Panel
* Real-time Analytics
* Multi-user Session Support

---

# 👩‍💻 Author

Built by **Shravani** 💙
Aspiring AI / Full Stack Developer

---

# ⭐ If You Like This Project

Give it a star on GitHub 🌟
