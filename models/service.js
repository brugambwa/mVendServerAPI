var mongoose = require('mongoose');
var dbConnection = require('./database');


var Schema = mongoose.Schema;

var serviceSchema = new Schema({
  serviceName:   { type: String, unique: true, required: true },
  serviceProvider:   { type: String, required: true },
  createdAt:  { type: Date, default: Date.now },
  serviceStatus: {type: String, default: 'Active'},
});


serviceSchema.statics = {
  getAllServices(){
    return this.find();
  },

  newService(data){
    return this.create({serviceName: data.servicename, serviceProvider: data.providername});
  }

}

var service = dbConnection.model('Service', serviceSchema);

module.exports = service;