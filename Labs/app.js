// main file to run the server application
const express = require('express')
const bodyParser = require('body-parser')
const db  = require('./db')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// function for HTML get request
app.get('/', (request, response) => {

  response.json({ info: 'CS256 Fall 2021 Lab' });
});

// Set API Endpoints
app.get('/classes', db.getClasses);
app.get('/classes/:id', db.getClassesById);
app.get('/classes/sem/:semester', db.getClassesBySemester);
app.post('/classes', db.addClass);
app.put('/classes/:id', db.updateClass);
app.delete('/classes/:id', db.deleteClass);


// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});
