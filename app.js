const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
var pg = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const sequelize = require('./utils/database');
const routes = require('./routes/api');
const passportjs = require('./passport');
pg.defaults.ssl = true;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/api', routes);


sequelize
  .sync()
  .then(res => {
    app.listen(port, function () {
      console.log('Example app listening on port ' + port);
    })
  })
  .catch(err => console.log(err));