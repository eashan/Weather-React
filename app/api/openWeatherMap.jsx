var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=6f05175dbc9a83f3a9afbe27f7228345&units=metric';

//6f05175dbc9a83f3a9afbe27f7228345
module.exports = {
  getTemp: function(city){
      var encodedLocation = encodeURIComponent(city);
      var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
      return axios.get(requestURL).then(function(response){
          if(response.data.cod && response.data.message){
            throw new Error(response.data.message);
          }
          else{
            console.log(response.data);
            return response.data.main.temp;
          }
        }, function(response){
          throw new Error(response.data.message)
        });
      //using `` we can pass variables like ${}
  }
}
