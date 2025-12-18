# E-commerce

## Description
This project is a simple e-commerce web application landing page.
It is designed for browsing products and preparing for future online purchasing functionality.
The application is built using Node.js and Express.js and serves a static landing page through an Express server.

## Team Members
- Quralai — SE-2429  
- Aida — SE-2429  
- Perizat — SE-2429  
- Ayanat — SE-2429  

## Topic Explanation
The topic of this project is an e-commerce web application.
The goal of the project is to create a modern and user-friendly online shop where users can browse products, view collections, and manage a shopping cart.
This project was chosen because it is practical and aligns well with the topics of the Web Technologies 2 course, such as backend development, APIs, databases, and authentication.

## Application Routes

The Express server handles the following routes:

- **GET /** – Home page with project introduction and navigation
- **GET /about** – About page with information about the project and team
- **GET /contact** – Contact page containing a message form
- **POST /contact** – Handles contact form submission and processes user input
- **All other routes** – Display a custom 404 Page Not Found

## Contact Form

The Contact page includes a form that allows users to send a message to the server.

### Form Fields:
- Name (text input)
- Email (email input)
- Message (textarea)
- Submit button

### Form Handling:
- The form sends data using a **POST** request to `/contact`
- Form data is processed on the server using Express middleware
- Submitted data is available through `req.body`
- The server logs the submitted data and sends a confirmation message back to the user

No database is used in this project.

## Planned Features
- Browse available products
- View product collections (Best sellers, Tops, Bottoms, Pyjamas)
- Add items to a shopping cart
- User account creation and management
- Online purchasing functionality (future implementation)

## Project Structure

<pre>
project-root/
├── public/
│   ├── style.css
│   └── images/
│
├── views/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── 404.html
│
├── server.js
├── package.json
└── README.md
</pre>

## Installation & Run Instructions

1. Install project dependencies:
npm install



2. Start the Express server:
 node server.js


3. Open the application in your browser:
http://localhost:3000

4. Test available routes:
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact

## Roadmap (10 Weeks)

- Week 1: Introduction to Backend Web Development  
  Set up Node.js and Express.js, create project structure, and implement a landing page.

- Week 2: Working with Server-Side Logic  
  Improve routing and server-side logic using Express.js.

- Week 3: Introduction to APIs  
  Design and implement basic API endpoints for products and categories.

- Week 4: Working with Databases  
  Plan data models for products, users, and orders.

- Week 5: NoSQL Databases (MongoDB)  
  Connect MongoDB and create collections for products and users.

- Week 6: Deployment and Git  
  Use Git for version control and deploy the project to a cloud platform.

- Week 7: Building RESTful APIs  
  Implement RESTful APIs for products, carts, and users.

- Week 8: Authentication and Security Concepts  
  Add user authentication and apply basic security practices.

- Week 9: Course Overview and Improvements  
  Review the project, improve UI, refactor code, and fix bugs.

- Week 10: Final Review and Project Completion  
  Final testing, documentation, and preparation for project defense.

## Technologies Used
- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript



