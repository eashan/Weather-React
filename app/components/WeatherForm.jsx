var React = require('react');

var WeatherForm = React.createClass({
  handleWeatherRequest: function(e){
    e.preventDefault();
    var city = this.refs.City.value;
    var temp = 25;
    if(city.length > 0)
    {
      this.props.onNewRequest(city,temp);      
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.handleWeatherRequest}>
          <input type="text" ref="City" />
          <button>Get Weather</button>
        </form>

      </div>
    );
  }
})

module.exports = WeatherForm;
