const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'my_localhost',
  user: 'root',
  password: 'test',
  database: 'carsdb'
});
module.exports = connection;
