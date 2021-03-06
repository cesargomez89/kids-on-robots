'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

module.exports = function(app) {

  app.route('/api/awesomeThings')
    .get(api.awesomeThings);


  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};
