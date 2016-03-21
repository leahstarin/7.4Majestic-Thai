var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var menu = require('../menu-items.js');
var models = require('./models');
var CartCollection= require('./checkout.js');
var cartCollection = new CartCollection();
var menuCollection = new models.MenuCollection(menu);
var HomePage = require('./../components/index.jsx');
var MenuItemComponent = require('./../components/menu.jsx');





var Router = Backbone.Router.extend({
  routes: {
  "" : "index",
  "menu": "menupage"
},


index: function(){
  ReactDOM.render(
    React.createElement(HomePage),
    document.getElementById('middle')
  );
},
menupage: function(){
  ReactDOM.render(
    React.createElement(MenuItemComponent,{collection: menuCollection, checkout: cartCollection}),
    document.getElementById('middle')
  )
}

});

module.exports =  new Router();
menuCollection.fetch();
