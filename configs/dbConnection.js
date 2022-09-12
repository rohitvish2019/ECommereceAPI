/* Require mongoose for interacting with mongoDB */

const mongoose = require('mongoose');

/* Setting up connection string */

mongoose.connect('mongodb://localhost/eCommerceAPI');

/* Getting connection */

let db = mongoose.connection;

/* Error handeling */

db.on('error',  console.error.bind(console, "Error connecting to MongoDB"));

/* Opening a connection */

db.once('open', function(){
    console.log("Connected to MongoDB");
});

module.exports = db;
