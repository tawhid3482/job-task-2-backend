 📌 Project Overview 


This system enforces strict business rules with role-based access using JWT authentication and Prisma ORM.

🛠️ Technology Stack

Programming Language: TypeScript

Web Framework: Express.js

ORM: Prisma

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

Password Hashing: bcryptjs

📌 API Endpoints 🔹 

https://job-task-2-backend.vercel.app/api/v1/users

https://job-task-2-backend.vercel.app/api/v1/perfections

https://job-task-2-backend.vercel.app/api/v1/slider

https://job-task-2-backend.vercel.app/api/v1/testimonial

https://job-task-2-backend.vercel.app/api/v1/news 

https://job-task-2-backend.vercel.app/api/v1/blogs 

https://job-task-2-backend.vercel.app/api/v1/media/photo 

https://job-task-2-backend.vercel.app/api/v1/media/video 

https://job-task-2-backend.vercel.app/api/v1/concerns 

https://job-task-2-backend.vercel.app/api/v1/enquiry



⚙️ Instructions to Run Locally

Clone Repository

git clone https://github.com/tawhid3482/job-task-2-backend

cd gym-management

Install Dependencies

npm install

Setup Environment Variables Create .env file:

DATABASE_URL="mongodb+srv://..." JWT_SECRET="your-secret-key" BCRYPT_SALT_ROUND=10

Run Prisma Migration

npx prisma generate npx prisma db push

Start Server

npm run dev

🚀 Live Hosting Link : https://job-task-2-backend.vercel.app