var Backbone = require('backbone');


var Cart = Backbone.Model.extend({
 idAttribute: 'cid'
});

var CartCollection = Backbone.Collection.extend({
  model: Cart,
});

module.exports = CartCollection;
