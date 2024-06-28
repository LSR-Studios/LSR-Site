const mysql = require('mysql')
const numeral = require('numeral')

const connection = mysql.createConnection({
    host: 'mysql.db.bot-hosting.net',
    port: 3306,
    user: 'u94877_3YOVsThJdw',
    password: 'kAOki+vjLYzS!Iz2gm+vUOei',
    database: 's94877_Levels',
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
