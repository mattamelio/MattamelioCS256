// main file to run the server application
const path = require('path')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const db  = require('./db')

const app = express();
const port = 3000;
// Use CORS for security
app.use(cors())
// Set up where to find the static frontend elements (html, css, js, images, files, etc.)
app.use(express.static(path.join(__dirname, '')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Default get response for http://localhost:3000/
app.get('/', (request, response) => {
response.sendfile('index.html');
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
