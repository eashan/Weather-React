var React = require('react');

var WeatherForm = require('WeatherForm');
var DisplayWeather = require('DisplayWeather');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

  getDefaultProps: function(){
    return{
      temp: 28,
      city: 'mumbai'
    }
  },
  getInitialState: function(){
    return{
      isLoading: false,
      temp: 0,
      city: '',
      isError: false
    };
  },
  handleWeatherRequest: function(city,temp){
    var that = this;
    this.setState({
      isLoading: true
    });
    OpenWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        temp: temp,
        city: city,
        isLoading: false
      });

    }, function(errorMessage){
      that.setState({
        isLoading: false,
        isError: true
      })
    })


  },
  render: function(){


    var {temp,city,isLoading,isError} = this.state;
    function renderMessage(){
      if(isLoading){
        return <h3> Fetching Weather ...</h3>;
      }else if (temp && location){
        return   <DisplayWeather city={city} temp={temp} />
      }
      else if(isError){
        return <h3 className="text-center">Invalid City</h3>
      }
    }
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onNewRequest={this.handleWeatherRequest}/>
        {renderMessage()}
      </div>
    );
  }
})

module.exports = Weather;
