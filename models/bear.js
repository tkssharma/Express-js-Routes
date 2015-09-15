var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});

// the schema is useless so far
// we need to create a model using it
var Bear = mongoose.model('Bear', BearSchema);

// make this available to our users in our Node applications
module.exports = Bear;