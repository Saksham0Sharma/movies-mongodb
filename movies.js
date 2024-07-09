var mongoose = require('mongoose');

//Schemas
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
    title: {type: String, required: true},
    year: Number,
    //Reference to Directors collection
    director: {type: mongoose.Schema.Types.ObjectId, ref:'Directors'}
});

//Create model to export schema. The parameters are "Model Name - (Collection name)" and "Schema Name"
var Movies = mongoose.model('Movies', moviesSchema);

//Export model
module.exports = {
    Movies
}