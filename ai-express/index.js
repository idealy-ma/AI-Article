const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors())

app.use(session({
    secret: 'adxyygz',
    resave: false,
    saveUninitialized: true
}));

// configure middleware
app.use(bodyParser.json());

// configure routes
app.use('/users', userRoutes);

// configure error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// start the server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
