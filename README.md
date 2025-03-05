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

# Postman Testing Guide for User Authentication System

## Prerequisites
1. Ensure your Node.js server is running (typically on http://localhost:5000)
2. Have Postman installed
3. Create a new Postman collection for this project

## Testing Endpoints

### 1. User Registration
- **Endpoint:** `POST http://localhost:5000/api/auth/register`
- **Headers:** 
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Expected Response:**
  - Status Code: 201
  - Response body should contain a JWT token
  - Save the token for subsequent authenticated requests

### 2. User Login
- **Endpoint:** `POST http://localhost:5000/api/auth/login`
- **Headers:** 
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Expected Response:**
  - Status Code: 200
  - Response body should contain a JWT token

### 3. Get Current User Profile
- **Endpoint:** `GET http://localhost:5000/api/auth/me`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer YOUR_JWT_TOKEN`
- **Body:** None
- **Expected Response:**
  - Status Code: 200
  - Response body should contain user details

### 4. Forgot Password
- **Endpoint:** `POST http://localhost:5000/api/auth/forgotpassword`
- **Headers:** 
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "email": "johndoe@example.com"
  }
  ```
- **Expected Response:**
  - Status Code: 200
  - Response body should confirm email sent
  - Check your email for the reset token

### 5. Reset Password
- **Endpoint:** `PUT http://localhost:5000/api/auth/resetpassword/:resettoken`
- **Note:** Replace `:resettoken` with the token received in email
- **Headers:** 
  - `Content-Type: application/json`
- **Body (raw JSON):**
  ```json
  {
    "password": "newpassword123"
  }
  ```
- **Expected Response:**
  - Status Code: 200
  - Response body should contain a new JWT token

## Common Error Scenarios to Test

### Registration Errors
1. Register with an existing email
2. Register without name
3. Register with invalid email format
4. Register with password less than 6 characters

### Login Errors
1. Login with incorrect email
2. Login with incorrect password
3. Login with empty credentials

## Postman Collection Tips
1. Create environment variables for:
   - `base_url`: http://localhost:5000
   - `jwt_token`: Copy the token from login/register response
2. Use Postman's Authorization tab and select "Bearer Token"
3. Set up pre-request scripts to automate token management

## Validation Checklist
- Ensure all endpoints return appropriate status codes
- Verify JWT token generation
- Check password hashing
- Test email uniqueness
- Validate input fields

