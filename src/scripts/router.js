define(function (require) {

  'use strict';

  var Backbone = require('backbone');

  // Views
  var MainView = require('views/mainView');

  return Backbone.Router.extend({

    routes: {

      '': 'list',
      'item/:id': 'item'

    },

    initialize: function () {

      console.log('initializing router');

      var mainView = new MainView();
      mainView.render();

    },

    list: function () {

      console.log('list');

    },

    item: function (id) {

      console.log('item id: ' + id);

    }

  });

});