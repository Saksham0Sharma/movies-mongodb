'use stricts'

var mongoose = require('mongoose');
var movies = require('./movieOperations');

//Connect to database
mongoose.connect("", function(err) {
    if (err){
        console.log("Error");
    }else{
        console.log("Connected to database :)");
    }
});

//Call the functions delcared in movieOperations file. Same name of require variable!
movies.createMovie();
