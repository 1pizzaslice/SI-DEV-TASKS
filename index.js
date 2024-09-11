const express = require('express');      // requiring express and creating an instance of it
const app = express();


const { connectToMongoDB } = require('./connect');      //connecting to the database

connectToMongoDB('mongodb://localhost:27017/tasks-app')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));



const urlRoute = require('./routes/router');        //   requiring the router file  which contains the routes

const Schema = require('./models/tasksSchema');             // requiring the schema from the models folder

const PORT = 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());  

app.use('/', urlRoute);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
