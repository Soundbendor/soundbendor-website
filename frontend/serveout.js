var express = require('express');
var app = express();

app.use(express.static('out'));

var server = app.listen(3000);