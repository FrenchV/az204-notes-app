# 🗒️ Notes Web App (Full Stack)

This is a full-stack **Notes Web App** built with a React frontend and ASP.NET Core backend, hosted and deployed using **Azure Static Web Apps** and **Azure App Service**. The project uses **CI/CD via GitHub Actions** to deploy both frontend and backend code automatically.

---

## 🚀 Features

- 📝 Create and manage notes
- 💡 React frontend with Axios for API calls
- 🔧 ASP.NET Core Web API backend
- ☁️ Hosted on Microsoft Azure
- 🔄 Continuous Deployment (CI/CD) using GitHub Actions

---

## 🧱 Tech Stack

| Layer     | Tech                         |
|-----------|------------------------------|
| Frontend  | React (Vite or CRA)          |
| Backend   | ASP.NET Core Web API         |
| Hosting   | Azure Static Web App (FE)    |
|           | Azure App Service (BE)       |
| CI/CD     | GitHub Actions               |
| DevOps    | Azure Portal & GitHub        |

---

## 📂 Folder Structure

```plaintext
root/
├── frontend/         # React frontend
│   ├── public/
│   └── src/
├── backend/          # ASP.NET Core backend
│   └── Controllers/
│       └── NotesController.cs
└── .github/
    └── workflows/    # GitHub Actions CI/CD files
