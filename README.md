
#  AI Code Converter

An AI-powered web application that converts source code from one programming language to another using large language models.  
Built with a Node.js backend, a responsive frontend, and deployed live on Render.

🔗 **Live Website:**  
https://ai-code-converter-db3e.onrender.com

---

##  Features

-   Convert code between multiple programming languages
-  AI-powered conversion using Groq LLM
-  Single-page responsive UI
-  Secure backend (API key never exposed)
-  Fast and simple to use
-  Frontend served directly from backend (no CORS issues)

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- Groq SDK
- dotenv

### Frontend
- HTML
- CSS (Responsive, modern UI)
- Vanilla JavaScript

### Hosting
- Render (Web Service)
- GitHub (Version Control)

---

##  Project Structure

```

project-root/
├── backend/
│   ├── server.js
│   ├── groq.js
│   ├── package.json
│   └── .env
│
└── frontend/
├── index.html
├── style.css
└── script.js

```

---

## ⚙️ How It Works

1. User pastes source code in the browser
2. Selects source and target programming languages
3. (Optional) Adds a custom instruction
4. Frontend sends a request to the backend
5. Backend calls the Groq AI model
6. Converted code is returned and displayed instantly

---

##  Environment Variables

The backend requires the following environment variable:

```

GROQ_API_KEY=your_groq_api_key

```

 Never expose this key to the frontend or commit it to GitHub.

---

##  Live Demo

 Try it here:  
**https://ai-code-converter-db3e.onrender.com**

---

##  Future Improvements

- Copy-to-clipboard button
- Language auto-detection
- Rate limiting & abuse protection
- Syntax highlighting
- User authentication
- Conversion history

---

##  Author

**GopiChandu Paladugu**

- GitHub: https://github.com/Gopibannu

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and feel free to fork or contribute!
