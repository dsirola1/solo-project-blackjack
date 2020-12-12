const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');

// const userController = require('./controllers/userController');
// const cookieController = require('./controllers/cookieController');
// const sessionController = require('./controllers/sessionController');

const PORT = 3000;

const app = express();
// app.use(express.static(__dirname + '/solo-project-blackjack/PNG-cards-1.3'))
app.use(express.static('png-cards-1.3'))
// app.use('/static', express.static('png-cards-1.3'))
app.use(express.static(path.join(__dirname)))



app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(express.static('PNG-cards-1.3'))
// app.use('/', express.static(path.join(__dirname, 'PNG-cards-1.3')))
// app.use(
//   '/chooseWar',
//   express.static(path.join(__dirname, 'PNG-cards-1.3'))
// )

app.get(
  '/',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'))
  }
)
app.get(
  '/login.css',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'login.css'))
  }
)

// post method for login

app.post(
  '/login',
  (req, res) => {
    console.log('post method for /login invoked')
    res.sendFile(path.join(__dirname, 'choosegame.html'))
  }
)

app.get(
  '/choosegame.css',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'choosegame.css'))
  }
)
// choosing blackjack
app.post(
  '/chooseBJ',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'blackjack.html'))
  }
)

app.get(
  '/blackjack.css',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'blackjack.css'))
  }
)
app.get(
  '/blackjack.js',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'blackjack.js'))
  }
)
// choosing war


app.post(
  '/chooseWar',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'War.html'))
  }
)

app.get(
  '/War.css',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'War.css'))
  }
)
app.get(
  '/War.js',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'War.js'))
  }
)

app.post(
  '/chooseBaccarat',
  (req, res) => {
    res.sendFile(path.join(__dirname, 'Baccarat.html'))
  }
)
// console.log(path.join(__dirname, 'login.html'))
/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;