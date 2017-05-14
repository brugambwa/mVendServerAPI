"use strict";
var express = require('express');
var servicesController = require("../controllers/servicesController");

var service = express.Router();

// GET mvend/services/
service.get('/', servicesController.getAllServices);

// POST mvend/services/
service.post("/", servicesController.createService);


module.exports = service;