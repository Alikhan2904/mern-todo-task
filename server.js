var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = 'mongodb+srv://Alikhan:Alikhan29@@mycluster.uhmwd.mongodb.net/ignite-labs-todo?retryWrites=true&w=majority'

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

var Users = require('./routes/Users')
var Todos = require('./routes/Todos')

app.use('/users', Users);
app.use('/todos', Todos);

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});


