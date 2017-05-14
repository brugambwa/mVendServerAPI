"use strict";
var Service = require("../models/service.js");


class servicesController{

	//Get all services
	static getAllServices(request, response, next){
		Service.getAllServices()
				.then(services => response.json(services))
				.catch(e => console.log(e));
	}

	//Get all services
	static createService(request, response, next){
		Service.newService(request.body)
				.then(service => response.json(service))
				.catch(e => console.log(e));
	}
	
}

module.exports = servicesController;