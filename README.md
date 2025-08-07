# 🗒️ Notes Web App (Full Stack)

This is a full-stack **Notes Web App** built with a React frontend and ASP.NET Core backend, hosted and deployed using **Azure Static Web Apps** and **Azure App Service**. The project uses **CI/CD via GitHub Actions** to deploy both frontend and backend code automatically.

---

## 🚀 Features

* 📝 Create and manage notes
* 💡 React frontend with Axios for API calls
* 🔧 ASP.NET Core Web API backend
* ☁️ Hosted on Microsoft Azure
* 🔄 Continuous Deployment (CI/CD) using GitHub Actions

---

## 🧱 Tech Stack

| Layer    | Tech                      |
| -------- | ------------------------- |
| Frontend | React (Vite or CRA)       |
| Backend  | ASP.NET Core Web API      |
| Hosting  | Azure Static Web App (FE) |
|          | Azure App Service (BE)    |
| CI/CD    | GitHub Actions            |
| DevOps   | Azure Portal & GitHub     |

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
```

---

## 💪 Local Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

> This will start the frontend on `http://localhost:5173` (if using Vite).

### 3. Setup Backend (ASP.NET Core API)

```bash
cd ../backend
dotnet restore
dotnet run
```

> The backend should run on `https://localhost:5001` by default.

---

## 🚀 Azure Deployment

### Frontend (Azure Static Web Apps)

* Configure the frontend build in Azure portal.
* App location: `frontend`
* Output location: `dist`
* API location (if used): `backend`

### Backend (Azure App Service)

* Deploy the backend separately using Azure App Service.
* Ensure CORS settings allow your frontend domain.

### Frontend Environment Variable

In Azure Static Web App configuration, set:

| Key            | Value                    |
| -------------- | ------------------------ |
| `VITE_API_URL` | `https://<your-api-url>` |

---

## 🔄 GitHub Actions (CI/CD)

Both frontend and backend are configured to deploy via GitHub Actions on push to the main branch.

Workflow files live in:

```plaintext
.github/workflows/
```

---

## 👤 Credits

Made by **Saad**

---

## 📄 License

MIT License – feel free to use, modify, and share!
