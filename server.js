var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

// sets port
var port = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoURI =
  'mongodb+srv://root:abc.123@devconnector-ysjg1.mongodb.net/ignite-labs-todo?retryWrites=true&w=majority';

// make mongodb connection on atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// require route files
var Users = require('./routes/Users');
var Todos = require('./routes/Todos');

// sets base url with the routes
app.use('/users', Users);
app.use('/todos', Todos);

// use the optimized build of client when environment is production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// starts the server
app.listen(port, () => {
  console.log('Server running on port: ' + port);
});
