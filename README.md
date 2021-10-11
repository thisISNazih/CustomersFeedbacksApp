# CustomersFeedbacksApp
# How to start the app 
 - client react app : `cd client` , run `npm start` it will run on localhost:3000
 - server node app : `cd server`, run `node app.js` it will run on localhost:3002
 - you can change the running environment port of the server from .env
### As For the database :
- You need to download postgres on your mac with `brew install postgresql`
- Type `psql` or `postgres` in terminal to open postgres
-  Type `CREATE DATABASE feedbackslogs;`
- Type `\q` to quit postgres and get to the normal terminal and type this command `psql feedbackslogs < pgdb.sql` in order to run the .sql file in the project to create the tables with the records.
- Now the database with the tables and records are created with `PGUSER=postgres` (env variables in .env file) by default, and no password and `PGPORT=5432` by default
- You can enter postgres again and type `\l` to list the database, and to connect to your  specified database type `\c feedbackslogs`

# Implemented Features Checklist

 - Listing customers names in CommentList react component with data fetched from /customers endpoint in the node server.  
 
 - When a customer name is clicked, the feedbacks are fetched from /customersFeedbacks endpoint and displayed in FeedbacksList component. 
 
 - When a customer name is clicked an "Add new feedback" button is shown to add a new feedback for the selected customer.  
 
 - When the "Add new customer"/"Add new feedback" button in  is clicked, a new input field is displayed to enter new customer name/feedback. When user clicks "Enter" keyboard button, the new customer name/feedback is displayed in the CustomersList/Feedbacks as well as added in the db through the node server endpoint. 
 
 - Clicking "Escape" keyboard button closes the new customer/feedback input field.  
 
 - When a customer name is clicked and the feedbacks are displayed, a search bar is shown to enter a search keyword, when the "Enter" keyboard button is clicked, the feedbacks list are filtered with the entered keyword, this filtering is handled through the client side in the redux store. 
 
 - When the feedbacks are filtered, a "Clear" button is displayed to clear the filters and re-fetch the feedbacks for the previously selected customer name. 



