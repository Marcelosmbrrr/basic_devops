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
    host: '172.20.0.2', // container IP WHEN this code is inside a container // localhost if is being executed on localhost
    port: 3306, // container port WHEN this code is inside a container // localhost binded port if is being executed on localhost
    database: 'shop', // database that exists inside mysql container
    user: 'root', // mysql container user
    password: 'root' // mysql container pass
});

connection.connect();

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get('/products', function (req, res) {
    connection.query('SELECT * FROM products', function (error, results) {

        if (error) {
            throw error
        };

        res.send(results.map(item => ({ id: item.id, name: item.name })));
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

// docker run -d --rm -p 3000:3000 --name node_container --network node_api_network -v ${pwd}:/app node_api 