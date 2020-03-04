// instantiate  express
const express = require('express');

// import conection mongo
const mongose = require('mongoose');

// instantiate routes
const routes = require('./routes');

// instantiate bodyparser to receved information with post
const bodyparser = require('body-parser');

// create server express the name: server
const server = express();

// conect with mongodb
mongose.Promise = global.Promise;
mongose.connect('mongodb://localhost/optica',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

// habilitly bodyparser to extract
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended:true}) );

// habilitamos el routing
server.use('/', routes() ); //middlewarer de express

server.listen(5000, () => {
    console.log('server function OK');
    
});

