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

