"use strict";

var utils = require("../utils/writer.js");
var Catalog = require("../service/CatalogService");
var lib = require("../utils/authentication.js");
module.exports.catalogGetUsingGET = function catalogGetUsingGET(
  req,
  res,
  next,
  xBrokerAPIVersion
) {
  let authenticated = lib.authenticate(req, res, next);
  if (authenticated) {
    Catalog.catalogGetUsingGET(xBrokerAPIVersion)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  }
};
