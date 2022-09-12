/* Constant varibles */

const express = require('express');
const app = express();
const db = require('./configs/dbConnection');
const port = 8000;

/* To use/read body of request */
app.use(express.urlencoded());

/* set main path*/ 

app.use('/api', require('./routes/index'));

/* Server initialization and startup */

app.listen(port, function(err){
    if(err){
        console.log("Error starting server "+err);
    }
    else{
        console.log("Server started on port "+port);
    }
});