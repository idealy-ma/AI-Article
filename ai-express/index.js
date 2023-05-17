const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
// const session = require('express-session');
// const userRoutes = require('./routes/userRoutes');
// const articleRoutes = require('./routes/articleRoutes');
const referencesRoutes = require('./routes/references.routes');
const laptopRoutes = require('./routes/laptop.routes')



const app = express();

app.use(cors())

// configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

// configure routes
// app.use('/users', userRoutes);
// app.use('/articles', articleRoutes);
app.use('/laptops', laptopRoutes);
app.use('/references', referencesRoutes);


// static
app.use(express.static('images'));

app.get('/images/:filename', (req, res) => {
  const { filename } = req.params;
  res.sendFile(`${__dirname}/images/${filename}`);
});


// configure error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// start the server
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
