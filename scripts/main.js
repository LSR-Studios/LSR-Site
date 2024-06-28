require('dotenv').config();
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.get('/leaderboard', (req, res) => {
    const sql = `SELECT * FROM users ORDER BY exp DESC LIMIT 10`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Database query error');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
