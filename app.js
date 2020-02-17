const express = require('express');
const app = express();

const ejs = require('ejs');
const indexPage = require('./routes/index');
const bodyParser = require('body-parser');
const db = require('./util/database');





app.set('view engine', 'ejs');
app.set('views','views');

app.use(indexPage);


app.listen(3000);
console.log('Listening now...');

