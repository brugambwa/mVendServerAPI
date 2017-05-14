var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var apiRoutes = express.Router();

var apiservice =  require('./servicesRouter');


apiRoutes.use(bodyParser.urlencoded({ extended: true }))
apiRoutes.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

// GET /health-check - Check service health 
apiRoutes.get('/health-check', (req, res) =>
  res.send('OK')
);

//Declare API Routes:
apiRoutes.use('/mvend/services', apiservice);


module.exports = apiRoutes;