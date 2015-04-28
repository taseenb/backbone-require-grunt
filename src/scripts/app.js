define(function (require) {

  'use strict';

  var Backbone = require('backbone');
  var Router = require('router');
  var Mediator = require('mediator-js');

  // Create App global
  window.App = window.App || {};

  // Global Events - pub/sub
  App.mediator = new Mediator();
  require('resize');
  require('scroll');

  // Start router
  App.router = new Router();
  Backbone.history.start();

});