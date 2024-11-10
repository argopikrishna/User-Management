# User Management System

This project is a User Management System built with Node.js, Express, and MongoDB. It provides functionalities for user registration, authentication, and profile management. The system uses bcrypt for password hashing and JWT for authentication. The project structure follows the MVC pattern, with separate folders for models, views, and controllers. The main features include user registration, login, logout, and profile management. The project also includes middleware for authentication and error handling. To get started, clone the repository, install the dependencies, set up the environment variables, and run the application. Contributions are welcome.

## Features

- User Registration
- User Authentication (Login/Logout)
- Password Hashing
- User Profile Management
- Middleware for Authentication

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt.js
- JWT

API Endpoints
Auth Routes
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
POST /api/auth/logout - Logout a user
User Routes
GET /api/users - Get all users
GET /api/users/:id - Get a user by ID
PUT /api/users/:id - Update a user by ID
DELETE /api/users/:id - Delete a user by ID

Project Structure
.
├── [app.js]
├── [config.js]
├── controllers
│   ├── authController.js
│   └── userController.js
├── middleware
│   └── authMiddleware.js
├── models
│   └── User.js
├── routes
│   ├── auth.js
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── users.js
└── package.json
