const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

// enable CORS for origin
app.use(cors({
    origin: "localhost:8081"
}));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'mysql_db', // container IP or SERVICE NAME WHEN this code is inside a container // localhost if is being executed on localhost
    port: 3306, // container port WHEN this code is inside a container // localhost binded port if is being executed on localhost
    database: 'shop', // database that exists inside mysql container
    user: 'root', // mysql container user
    password: 'root' // mysql container pass
});

connection.connect();

app.get("/", (req, res) => {
    res.send("<h1>Successful connected to database! </h1>");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});