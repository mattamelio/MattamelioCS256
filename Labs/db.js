const tunnel = require('tunnel-ssh')
const Pool = require('pg').Pool
require('dotenv').config();

// Read in the ssh tunnel details from .env
let sshConfig = {
    host: process.env.SSH_HOST,
    port: 22,
    username: process.env.SSH_USER,
    privateKey: require('fs').readFileSync(process.env.SSH_PRIVATE_KEY),
    passphrase: process.env.SSH_PASSPHRASE,
    keepaliveInterval: 60000,
    keepAlive: true,
    dstHost: process.env.REMOTE_HOST,
    dstPort: process.env.REMOTE_PORT,
    localHost: process.env.LOCAL_HOST,
    localPort: process.env.LOCAL_PORT
};

// Initiate asynchronous ssh connection
var server = new Promise(function(resolve, reject){

  // Create tunnel for port forwarding
	tunnel(sshConfig, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
    }
    console.log('Database connection initalizing');

		//Connect to postgres instance
		db = new Pool({
				database: process.env.DATABASE_NAME,
				port:     process.env.LOCAL_PORT,
				user:     process.env.SSH_USER,
				password:	process.env.DATABASE_PASSWORD
		});

		// send back the database connection once
		// the asynchronous ssh connection is made
		resolve(db)
	});
});

// Get all classes
const getClasses = (request, response) => {
	server.then((conn) => {
    conn.query('SELECT * FROM classes', (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
 });
};

// Get classes by ID
const getClassesById = (request, response) => {
	server.then((conn) => {
  	const id = request.params.id;

  	conn.query('SELECT * FROM classes WHERE id = $1', [id], (error, results) => {
	    if (error) {
	      throw error;
	    }
	    response.status(200).json(results.rows);
  	});
	});
};

// Get classes by semester
const getClassesBySemester = (request, response) => {
	server.then((conn) => {
    const semester = request.params.semester;
    conn.query('SELECT * FROM classes WHERE semeseter = $1', [semester], (error, results) => {
	    if (error) {
	      throw error;
	    }
	    response.status(200).json(results.rows);
  	});
	});
};

// Add a new class
const addClass = (request, response) => {
	server.then((conn) => {
  	const { id, title, semester, year } = request.body;

  	conn.query('INSERT INTO classes VALUES ($1, $2, $3, $4)', [id, title, semester, year], (error, results) => {
	    if (error) {
	      throw error;
	    }
	    response.status(201).send(`Class added with ID: ${id}`);
  	});
	});
};

// Update a class
const updateClass = (request, response) => {
	server.then((conn) => {

    conn.query('UPDATE classes SET ')
	});
};

// Delete a class
const deleteClass = (request, response) => {
	server.then((conn) => {

    conn.query('DELETE * FROM classes WHERE')

	});
};

// Export the database connection and CRUD functions
module.exports = {
	server,
	getClasses,
	getClassesById,
	getClassesBySemester,
	addClass,
	updateClass,
	deleteClass
};
