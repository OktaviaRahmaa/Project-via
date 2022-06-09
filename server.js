const express = require("express");
const mysql = require("mysql");
const app = express();

app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Prince Rest API listening on port ${port}`);
});

const pool = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    socketPath: `/cloudsql/&{process.env.INSTANCE_CONNECTION_NAME}`,
});

app.get("/", async (req, res) => {
    const query = "SELECT * FROM looks WHERE name = ?";
    poll.query(query, [ req.params.look ], (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not found"});
        } else {
            res.json(results[0]);
        }
    });
    // res.json({ status: "Hei Princess! Ready to roll!!"});
    // res.json({ query: 'select name from looks;'});
});

app.get("/:look", async (req, res) => {
    const query = "SELECT * FROM looks WHERE name = ?";
    poll.query(query, [ req.params.look ], (error, results) => {
        if (!results[0]) {
            res.json({ status: "Not found"});
        } else {
            res.json(results[0]);
        }
    });
});



const createUnixSocketPool = async (config) => {
   const dbSocketPath = process.env.DB_SOCKET_PATH || "/cloudsql"

   // Establish a connection to the database
   return await mysql.createPool({
     user: process.env.DB_USER, // e.g. 'my-db-user'
     password: process.env.DB_PASS, // e.g. 'my-db-password'
     database: process.env.DB_NAME, // e.g. 'my-database'
     // If connecting via unix domain socket, specify the path
     socketPath: `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`,
     // Specify additional properties here.
     ...config
   });
 }