var Backbone = require('backbone');


var MajesticChai = Backbone.Model.extend({

});

var MenuCollection = Backbone.Collection.extend({
  model: MajesticChai,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
  parse: function(data){
    console.log(data);
    return data;
  }
});

module.exports = {
  "MajesticChai" : MajesticChai,
  "MenuCollection" : MenuCollection
  
}
