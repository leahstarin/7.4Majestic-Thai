var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');


var MenuItemComponent = React.createClass({

  handleClick: function(model){
    console.log('before add:', this.props.checkout);
    this.props.checkout.add(model);
    console.log('after add:',this.props.checkout);
  },

  render: function(){
    var menuItems = this.props.collection.map(function(model){
      var boundItemClick = this.handleClick.bind(this, model);
     return (
      <div key={model.cid}>
        <p>{model.get('item')}</p>
        <p>{model.get('description')}</p>
         <a onClick={boundItemClick}><span>{model.get('price')}</span></a>
        <p>{model.get('category')}</p>
        <br></br>
      </div>
    );
  }.bind(this));
  return ( <div> {menuItems}</div>);
  }
});

module.exports = MenuItemComponent;
