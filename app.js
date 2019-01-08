const express = require('express');
const app = express();
const port=process.env.PORT || 3000;
const { Client } = require('pg');

const dbConnectionURL = 'postgres://vehffbqamvhnci:e9ad7bb1267dfe6a9f62fb2c11a9b04a6efe1ba99df8d6b5101d785c7c92ad0c@ec2-23-21-171-25.compute-1.amazonaws.com:5432/dd0i4vp4b58dq1';
const client = new Client({
  connectionString: dbConnectionURL,
  ssl: true,
});

app.get('/', function (req, res) {
  client.connect();
  client.query("SELECT * FROM link;", (err, result) => {
    if (err) throw err;
    res.send(result.rows);
    client.end();
  });
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});