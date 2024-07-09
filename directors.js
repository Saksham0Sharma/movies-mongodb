var mongoose = require('mongoose');

//Schemas
var Schema = mongoose.Schema;

var directorsSchema = new Schema({
    name: {type: String, required: true},
    birth: Number
});

//Create model to export schema. The parameters are "Model Name - (Collection name)" and "Schema Name"
var Directors = mongoose.model('Directors', directorsSchema);

//Export model
module.exports = {
    Directors
}