const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Yashu@123',      // your MySQL password
  database: 'sign_db'  // change to your DB name
});

module.exports = pool.promise();
