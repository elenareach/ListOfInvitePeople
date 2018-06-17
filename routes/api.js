//Dependencies

var express = require('express');
var router = express.Router();

var Name = require('../models/name');
Name.methods(['get', 'put', 'post', 'delete']);
Name.register(router, '/names');

//Return Router
module.exports = router;

