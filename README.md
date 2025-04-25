## Store Rating Platform – FullStack Intern Challenge
A full-stack web application that enables users to register, log in, browse stores, and submit ratings. Features role-based access for System Administrators, Normal Users, and Store Owners.

## 💻 Tech Stack
Frontend: React.js

Backend: Express.js 

Database: PostgreSQL 

## 🔐 User Roles & Permissions
🔧 System Administrator
Add normal/admin users & stores

View dashboard:

Total users

Total stores

Total submitted ratings

Filter & view users and stores by Name, Email, Address, and Role

View detailed user info (including ratings for Store Owners)

👤 Normal User
Register & log in

View and search stores by Name or Address

Submit/modify ratings (1–5) for any store

View:

Store Name, Address

Overall rating

Their own submitted rating

Change password

Logout

🏪 Store Owner
Log in

View dashboard:

List of users who rated their store

Average rating of their store

Change password

Logout

## 📊 Features
Responsive UI

Role-based authentication and access control

JWT Authentication

RESTful API architecture

Sorting and filtering for user/store listings

Real-time data refresh using polling

PostgreSQL schema designed with normalization best practices

🗂️ Folder Structure
pgsql
Copy

## 🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/store-rating-platform.git
cd store-rating-platform
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file:

env
Copy
Edit
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/storeapp
JWT_SECRET=your_jwt_secret
Start server:

bash
Copy
Edit
npm run dev
3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
## 📮 API Endpoints (Sample)

Method	Endpoint	Description
POST	/api/auth/login	User login
POST	/api/auth/register	User registration
GET	/api/stores	List all stores
POST	/api/stores/rate/:storeId	Submit or update store rating
GET	/api/admin/dashboard	Admin dashboard stats
GET	/api/store-owner/dashboard	Store owner dashboard info
🧪 Testing
You can test endpoints using Postman or Thunder Client. Sample collection included (if needed).

📌 Notes
Ensure PostgreSQL server is running

Use roles to determine feature visibility in UI


📸 Screenshots
Include login screen, dashboard view, store list, and rating form screenshots here.

📄 License
This project is licensed under the MIT License.

