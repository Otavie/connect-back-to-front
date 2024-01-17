# CONNECT TO FRONTEND TO BACKEND

This repository demonstrates a simple web application that connects the frontend and backend. The project uses Express.js for the server, MongoDB as the database, and Mongoose for object modeling. The frontend is a basic HTML form to collect user details, and the backend saves this data to the MongoDB database.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/connect-back-to-front.git
   cd connect-back-to-front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

The server will be running on http://localhost:4040.

## Project Structure

- **`app.js`**: Main server file where the Express application is defined.
- **`model.js`**: Mongoose schema definition for user details.
- **`database.js`**: Connection to the MongoDB database.
- **`index.html`**: Simple HTML form for collecting user details.

## Dependencies

- **Express.js**: A minimal and flexible Node.js web application framework.
- **Mongoose**: An elegant MongoDB object modeling tool for Node.js.
- **Body-Parser**: Node.js body parsing middleware.

## Configuration

- **MongoDB URI**: The MongoDB connection URI is stored in the `DB_URI` variable in `database.js`. Update this URI with your own MongoDB database connection string.

## Usage

1. Open the application in your browser: http://localhost:4040.
2. Fill in the first name and last name in the form.
3. Click the "Save User" button to submit the form.
4. The user details will be saved to the MongoDB database.

## License

Feel free to explore, modify, and use this project as a starting point for your own applications. If you encounter any issues or have suggestions, please create an issue on the GitHub repository.

Happy coding! 😀

## Steps to Create MongoDB Database

Using the url `https://account.mongodb.com` and click on `Sign In`

On the **Sign In Page**, login with your credentials or `Sign Up` if you have not created an account

Create a new project, then click on create a database

Click on Connect

On the Connect to <Cluster Name> Page, click on Drivers

On the **Add your connection string into your application code** section, copy the url there and save somewhere (It will be needed)
