# EXpress JS Route and REST calls 

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

```sh
// grab the user model
var Bear = require('./models/bear');
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

```
# creating schema 

```sh
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String
});
// the schema is useless so far
// we need to create a model using it
var Bear = mongoose.model('Bear', BearSchema);

```
# All different methods on schema object 
```sh
http://localhost:8080/api/bears HTTP GET
http://localhost:8080/api/bears HTTP POST
http://localhost:8080/api/bears/:ID HTTP DELETE
http://localhost:8080/api/bears/:ID HTTP GET
```


