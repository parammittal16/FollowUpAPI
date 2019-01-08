const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'followup',
  password: 'Param16@' 
});

app.get('/', function (req, res) {
  pool.promise().execute('SELECT * FROM students')
  .then(resu => res.send(resu[0]))
  .catch(err => console.log(err));
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});