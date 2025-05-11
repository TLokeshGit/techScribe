# 📝 techScribe – MERN Stack Notes App

## 🔍 About This Project

**techScribe** is a full-stack notes management application built with the **MERN** stack (MongoDB, Express, React, Node.js). It enables users to securely create, view, edit, and delete notes, with role-based access for Admins, Managers, and Employees.

---

## ✨ Features

- ✅ JWT-based Authentication
- 🔐 Role-Based Access Control (RBAC)
- 📝 Create, View, Edit, and Delete Notes
- 👥 Assign Notes to Users
- 🔄 Global State Management via Redux Toolkit
- 📱 Fully Responsive Design (Mobile & Desktop)

---

## ⚙️ Tech Stack

| Layer          | Technologies                                    |
| -------------- | ----------------------------------------------- |
| **Frontend**   | React, Redux Toolkit, React Router, FontAwesome |
| **Backend**    | Node.js, Express, Mongoose                      |
| **Database**   | MongoDB (Atlas or Local)                        |
| **Security**   | JWT, bcrypt, cookie-parser, cors                |
| **Deployment** | Render.com                                      |

---

## 🚀 Live Demo

🔗 **[View Live Project](https://github.com/TLokeshGit/technotes)**  
_(Replace with your actual deployed URL if available)_

---

## 🧰 Getting Started

### 🔧 Prerequisites

- Node.js (v14 or later)
- npm (or yarn)
- MongoDB (local or Atlas)

---

### 📥 Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/TLokeshGit/techScribe.git
   cd technotes
   ```

2. **Install Server Dependencies:**

   ```bash
   cd server
   npm install
   ```

3. **Install Client Dependencies:**

   ```bash
   cd ../client
   npm install
   ```

---

### ⚙️ Environment Configuration

1. Rename `.env.example` to `.env` inside the `server/` directory.
2. Populate `.env` with:

   ```env
   NODE_ENV=development
   PORT=3500
   DATABASE_URI=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ```

---

### 🏃 Running the Application Locally

1. **Start Backend Server:**

   ```bash
   cd server
   npm run dev
   ```

2. **Start React Frontend:**

   ```bash
   cd ../client
   npm start
   ```

3. Open `http://localhost:3000` in your browser.

---

### 🌱 Seeding the Database

To create an admin user:

```bash
cd server
npm run seed
```

> Default credentials from `seed.js`:  
> **Username**: `admin`  
> **Password**: `Admin@123`

---

## ☁️ Deployment on Render

### 🔧 Backend (Web Service)

1. Go to [Render.com](https://render.com), click **"New" → "Web Service"**
2. Select the GitHub repo and set **root directory** to `server/`
3. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `npm run start:prod`
4. Add Environment Variables:
   - `NODE_ENV=production`
   - `DATABASE_URI=your_mongodb_connection_string`
   - `PORT=3500`
   - `ACCESS_TOKEN_SECRET=your_access_token_secret`
   - `REFRESH_TOKEN_SECRET=your_refresh_token_secret`

---

### 🌐 Frontend (Static Site)

1. Go to **"New" → "Static Site"**
2. Set root directory as `client/`
3. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `build`

---

## 🤝 License & Credits

Built by **Lokesh T**  
Feel free to fork, contribute, and deploy your own version!
