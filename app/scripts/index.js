var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var router = require('./models/router');


$(function(){
  Backbone.history.start();
});
