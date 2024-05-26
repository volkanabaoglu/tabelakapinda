# Tabelakapinda - E-Commerce Platform

## About the Project

**Tabelakapinda** is an e-commerce platform developed using the MERN Stack (MongoDB, Express, React, Node.js). This platform allows users to browse and purchase various products online. Redux is used throughout the project for state management.

## Technologies Used

- **Frontend:**
  - React
  - Redux
  - HTML
  - CSS
  - JavaScript

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

## Features

- User registration and login
- Product listing
- Product detail page
- Add to cart
- Create orders
- Admin panel (add, edit, and delete products)

## Installation and Running the Project

### Requirements

- Node.js
- MongoDB

### Steps

   ```sh
   git clone https://github.com/tabelakapinda.git
   cd tabelakapinda
   cd backend
   npm install
   cd ../frontend
   npm install


Create a .env file in the backend directory and add the following variables:

NODE_ENV=development
PORT=5000
MONGO_URI=YourMongoDBConnectionURI
JWT_SECRET=YourJWTSecret

In separate terminal windows or tabs, run the following commands:

# In the backend directory
cd backend
npm run dev

# In the frontend directory
cd ../frontend
npm start

Open the Application:

Go to http://localhost:3000 in your browser.
