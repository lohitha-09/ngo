const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server','views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', message: 'Welcome to Volunteer Engagement App!' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', message: 'Learn more about how NGOs engage and track volunteers.' });
});

app.get('/volunteers', (req, res) => {
  res.render('volunteers', { title: 'Volunteer Management', message: 'Recruit, onboard, and assign volunteers.' });
});

app.get('/impact', (req, res) => {
  res.render('impact', { title: 'Impact Reports', message: 'Track and measure project outcomes.' });
});

// error handler
app.use((req, res) => {
  res.status(404).render('error', { title: '404 - Not Found', message: 'Page not found' });
});

module.exports = app;