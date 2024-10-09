# To-do Web Application

This is a To-do Web Application built with React and Vite.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
   `git clone https://github.com/mildanfalah/to-do-web-app.git`

2. Navigate to the project directory:
   `cd to-do-web-application--coding-assignment-`

3. Install the dependencies:
   `npm install`

## Running the Application

To run the application in development mode:
`npm run dev`

This will start the development server. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal) to view the application.

## Viewing the Built Application

The built version of the application is included in the `dist` directory. To view it:

1. Install a local server (if you haven't already):
   `npm install -g http-server`

2. Navigate to the project root directory and run:
   `npx http-server dist`

3. Open your browser and go to `http://localhost:8080` (or the URL provided in the terminal).

This will serve the production build of the application, allowing you to test it as it would appear when deployed.

## Using the Application

1. **Registration and Login**:

   - When you first open the application, you'll be directed to the login page.
   - If you don't have an account, click on the "Register" link at the bottom of the login form.
   - On the registration page, provide your email address and password to create a new account.
   - After successful registration, you'll be redirected to the login page.
   - Log in with your email address and password to access the to-do list functionality.

2. **Dashboard**: After logging in, you'll be taken to the dashboard where you can:

   - Add new to-do items
   - View your existing to-do list
   - Mark items as complete or incomplete
   - Edit existing to-do items
   - Delete to-do items
   - Search for specific to-do items

3. **Persistence**: Your to-do items are saved in the browser's local storage, so they will persist even if you close the browser. Each user's to-do list is associated with their account.

## Main Features

- User registration and authentication
- Secure login required to access to-do functionality
- Create, read, update, and delete to-do items
- Mark to-do items as complete or incomplete
- Search functionality for to-do items
- Persistent storage using browser's local storage
- Separate to-do lists for each user account

## Building for Production

To build the application for production:
`npm run build`

This will create a `dist` folder with the production build of your application.

## Other Available Scripts

- `npm run lint`: Run ESLint to check for code quality and style issues.
- `npm run preview`: Preview the production build locally.

## Dependencies

- React
- React DOM
- React Router DOM
- PropTypes

## Dev Dependencies

- Vite
- ESLint
- TypeScript types for React
