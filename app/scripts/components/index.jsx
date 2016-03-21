var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');




var HomePage = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <HoursComponent/>
        <LocationComponent/>
        <MenuComponent onClick={this.handleClick}/>
      </div>
    );
  }
})


var HoursComponent = React.createClass({
 render: function(){
   return (
     <div className="hours col-sm-4">
       <h2>Hours</h2>
       <p>Mon-Sat: 11:00am-2:00pm</p>
       <h2>Dinner</h2>
       <p>Mon-Sat: 5:00pm-10:30pm</p>
     </div>

   );
 }

});

var LocationComponent = React.createClass({
  render: function(){
    return (
      <div className="location col-sm-4">
        <h2>Location</h2>
        <p>Address: 106 N Main St, Greenville, SC 29601</p>
        <p>Phone:(864) 241-9988</p>
      </div>

    )
  }
});

var MenuComponent = React.createClass({
  render: function(){
    return (
      <div className="menu col-sm-4">
        <h2><a href="#" onClick={this.props.onClick}>Menu</a></h2>
        <p>Appetizers</p>
        <p>Dinner</p>
        <p>Drinks</p>
        <p>Dessert</p>
      </div>
    )
  }
});


module.exports = HomePage;
