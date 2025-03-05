# Project Changes Overview

## Overview
This document provides an overview of the recent changes made to the project.

### 1. Server Setup
- Configured an Express server in `server.js`.
- Added middleware for JSON parsing and CORS.
- Configured the server to run on a port specified in the environment variables or default to port 5000.
- Connected to MongoDB using Mongoose.

### 2. Package Dependencies
- Added necessary dependencies in `package.json` for the user authentication system:
  - `bcryptjs`
  - `dotenv`
  - `express`
  - `express-validator`
  - `jsonwebtoken`
  - `mongoose`
  - `nodemailer`
  - `crypto`
  - `cors`
- Added `nodemon` as a development dependency for automatic server restarts during development.

### 3. Database Configuration
- Created a `config/db.js` file to handle MongoDB connection using Mongoose.

### 4. Error Handling
- Created a `utils/errorResponse.js` file to handle custom error responses.

### 5. Email Utility
- Created a `utils/sendEmail.js` file to handle sending emails using Nodemailer.

### 6. Authentication Routes
- Created an `routes/auth.js` file to handle authentication routes including register, login, getMe, forgotPassword, and resetPassword.

### 7. User Model
- Created a `models/User.js` file to define the User schema and methods for password hashing, JWT token generation, and password reset token generation.

### 8. Authentication Middleware
- Created a `middleware/auth.js` file to handle route protection using JWT.

### 9. Authentication Controller
- Created a `controllers/authController.js` file to handle authentication logic including register, login, getMe, forgotPassword, and resetPassword.

## Notes
- Ensure to merge the changes carefully to avoid conflicts.
- Review the changes to understand the new functionalities added.

