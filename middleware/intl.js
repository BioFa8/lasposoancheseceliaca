'use strict';

var path = require('path');

// See: http://formatjs.io/guides/runtime-environments/#user-locale-server
module.exports = function (req, res, next) {
  var handlebarsData = res.locals.data || (res.locals.data = {});

  handlebarsData.intl = {
      locales : ["it-IT"]
  };

  next();
};
