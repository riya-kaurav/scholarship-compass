# **🎓 Scholarship Manager — MERN Application**
A full-stack web application that helps students discover scholarships, filter opportunities based on eligibility, and track their application status. The system also includes an admin module for managing scholarships and reviewing applications.

## 🚀 Features
*User Module*
1. Signup with email & password
2. OTP-based email verification
3. Secure login with JWT authentication
4. Complete student profile
5. Browse scholarships
6. Filter by:
  - Gender
  - State
  - Organisation Type (Govt / Private)
7. Apply to scholarships
8. Track application status

*Admin Module*
1. Add / edit / delete scholarships
2. View submitted applications

*Security*
1. Role-based access (User / Admin)
2. Protected routes using JWT
3. Indexed MongoDB collections for performance

## 🧩 Tech Stack
*Frontend*
1. React + Vite
2. Axios API integration
3. JWT client-side auth

*Backend*
1. Node.js
2. Express.js
3. Mongoose (MongoDB ODM)
4. Nodemailer (OTP emails)
5. JSON Web Tokens


*Database*
1. MongoDB Atlas (Cloud)

## 🧱 Project Architecture (High-Level)
1. React frontend calls Express APIs
2. Express communicates with MongoDB Atlas
3. JWT enables secure access to protected routes
4. Admin manages scholarships and reviews applications
