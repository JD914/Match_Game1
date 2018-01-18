(function () {
  'use strict';

  var express = require('express');
  var open = require('open');
  var app = express();
  app.use(express.static('src/client'));
  app.listen(9000);

  open('http://localhost:9000');
})();