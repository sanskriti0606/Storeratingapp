## Store Rating Platform – FullStack Intern Challenge
A full-stack web application that enables users to register, log in, browse stores, and submit ratings. Features role-based access for System Administrators, Normal Users, and Store Owners.

## Deployement : https://store-rating-app.vercel.app/user/dashboard

## 💻 Tech Stack
Frontend: React.js

Backend: Express.js 

Database: PostgreSQL 


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

## 🧪 Testing
You can test endpoints using Postman or Thunder Client. Sample collection included (if needed).

## 📌 Notes
Ensure PostgreSQL server is running

Use roles to determine feature visibility in UI


## 📸 Screenshots
![Screenshot_1](https://github.com/user-attachments/assets/4fb0ccde-d3a9-4223-a2dd-ca218d89ff4d)
![Screenshot_2](https://github.com/user-attachments/assets/76df9e8a-dddc-4258-8498-30bb90882fc5)
![image](https://github.com/user-attachments/assets/327641e1-9fab-4ac5-ad00-d9ce545a57ce)
![image](https://github.com/user-attachments/assets/f7903dbd-d05b-4564-83bc-209477390246)


## 📄 License
This project is licensed under the MIT License.

