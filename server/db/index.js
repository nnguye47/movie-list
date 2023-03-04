const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies',
});

connection.connect(function(err) {
  if (err) {
    console.log('err from db.js: ', err)
    err;
  } else {
    console.log('connected to database');
  }
})

module.exports = connection;
