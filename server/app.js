require('dotenv').config();
console.log(`Environment --- ${process.env.NODE_ENV}`);

const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(path.join(__dirname + './../public/')));

app.set('view engine', hbs);
app.set('views', path.join(__dirname + '/views'));

hbs.registerPartials(path.join(__dirname + '/views/partials'));
hbs.registerHelper('copyRightYear', () => new Date().getFullYear());

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => console.log('Server is up!'));