var React = require('react');

// var About = React.createClass({
//
//   render: function(){
//     return(
//       <h3> About Component</h3>
//     );
//   }
// })

var About = (props)=>{
return(
  <div>
  <h1 className="text-center"> About </h1>
  <p> This is a weather application on react</p>
  <p>Here are some of the tools I've used</p>
  <ol>
    <li>
      <a href="https://facebook.github.io/react">React</a> - This was the JS Framework used
    </li>
    <li>
      <a href="http://openweathermap.org">Open Weather Map</a> - We used Open Weather Map to search for weather data by city name.
  
    </li>
  </ol>
</div>

);
};

module.exports = About;
