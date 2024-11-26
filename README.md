# techScribe-MERN-Render

## About This Project

Technotes is a full-stack application built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, edit, and delete notes (tickets) assigned to different users. The application supports different user roles, including Employees, Managers, and Admins, each with varying levels of access and permissions.

**Features:**

- User authentication with JWT
- Role-based access control
- CRUD operations for notes
- Assigning notes to users
- Real-time updates with React-Redux
- Responsive design for desktop and mobile

**Technologies Used:**

- **Frontend:** React, Redux Toolkit, React Router, FontAwesome
- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Authentication:** JWT, bcrypt
- **Other:** dotenv, cors, cookie-parser

**Deployment:** Deployed on Render.com

**GitHub Repository:** [techScribe-MERN-Render](https://github.com/TLokeshGit/technotes)

## Instructions to Execute This Project

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **MongoDB** (local installation or cloud-based, e.g., MongoDB Atlas)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/TLokeshGit/technotes.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd technotes
   ```

3. **Install Server Dependencies:**

   ```bash
   cd server
   npm install
   ```

4. **Install Client Dependencies:**

   ```bash
   cd ../client
   npm install
   ```

### Configuration

1. **Set Up Environment Variables:**

   - Rename `.env.example` to `.env` in the `server` directory.
   - Update the `.env` file with your MongoDB URI and JWT secrets:

     ```properties
     NODE_ENV=development
     DATABASE_URI=your_mongodb_connection_string
     PORT=3500
     ACCESS_TOKEN_SECRET=your_access_token_secret
     REFRESH_TOKEN_SECRET=your_refresh_token_secret
     ```

### Running the Application

1. **Start the Server:**

   ```bash
   cd server
   npm run dev
   ```

2. **Start the Client:**

   ```bash
   cd ../client
   npm start
   ```

3. **Access the Application:**

   Open your browser and navigate to `http://localhost:3000`

### Seeding the Database

To create an admin user, run the seed script:

```bash
cd server
npm run seed
```

### Deployment on Render.com

1. **Create a New Web Service:**

   - Go to your Render.com dashboard.
   - Click on "New" and select "Web Service".
   - Connect your GitHub repository and select the `tech-scribe-mern-render` repository.

2. **Configure the Web Service:**

   - **Environment:** Select `Node`.
   - **Build Command:** `cd server && npm install && cd ../client && npm install && npm run build`
   - **Start Command:** `npm run start:prod`
   - **Environment Variables:** Add the following environment variables:
     - `NODE_ENV=production`
     - `DATABASE_URI=your_mongodb_connection_string`
     - `PORT=3500`
     - `ACCESS_TOKEN_SECRET=your_access_token_secret`
     - `REFRESH_TOKEN_SECRET=your_refresh_token_secret`
     - `BASE_URL_PROD=https://techScribe-api.onrender.com`

3. **Deploy:**

   - Click "Create Web Service" to deploy your application.
   - Wait for the deployment to complete and access your application at the provided URL.
