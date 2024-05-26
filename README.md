Tabelakapinda - E-Commerce Platform
About the Project
Tabelakapinda is an e-commerce platform developed using the MERN Stack (MongoDB, Express, React, Node.js). This platform allows users to browse and purchase various products online. Redux is used throughout the project for state management.

Technologies Used
Frontend:

React
Redux
HTML
CSS
JavaScript
Backend:

Node.js
Express.js
MongoDB
Features
User registration and login
Product listing
Product detail page
Add to cart
Create orders
Admin panel (add, edit, and delete products)
Installation and Running the Project
Requirements
Node.js
MongoDB
Steps
Clone the Repository:

sh
Copy code
git clone https://github.com/tabelakapinda.git
cd tabelakapinda
Install Backend and Frontend Dependencies:

sh
Copy code
cd backend
npm install

cd ../frontend
npm install
Set Up Environment Variables:

Create a .env file in the backend directory and add the following variables:

env
Copy code
NODE_ENV=development
PORT=5000
MONGO_URI=YourMongoDBConnectionURI
JWT_SECRET=YourJWTSecret
Start the Backend:

sh
Copy code
cd backend
npm run dev
Start the Frontend:

sh
Copy code
cd ../frontend
npm start
Open the Application:

Go to http://localhost:3000 in your browser.
