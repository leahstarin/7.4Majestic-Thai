var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var models = require('./models/models');

var menuCollection = new models.MenuCollection();

var resturantComponent = require('./components/index.jsx');
var HoursComponent = resturantComponent.HoursComponent;
var LocationComponent = resturantComponent.LocationComponent;
var MenuComponent = resturantComponent.MenuComponent

ReactDOM.render(
  React.createElement(HoursComponent),
  document.getElementById('nav-bar')
);

ReactDOM.render(
  React.createElement(LocationComponent),
  document.getElementById('location')
);

ReactDOM.render(
  React.createElement(MenuComponent),
  document.getElementById('menu')
);



menuCollection.fetch()
