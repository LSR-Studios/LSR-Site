require('dotenv').config()
const mysql = require('mysql')
const numeral = require('numeral')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

function getLeaderboard() {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM users ORDER BY exp DESC LIMIT 10`;
        connection.query(sql, (err, results) => {
            if (err) {
                console.error(err);
                return reject(err);
            }
            resolve(results);
        });
    });
}

let pTest = document:GetElementById('test')
let text = ''
getLeaderboard()
  .then(results => {
    console.log(results)
  })
