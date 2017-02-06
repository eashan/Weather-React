var React = require('react');

// var DisplayWeather = React.createClass({
//
//   render: function(){
//     var {temp, city} = this.props;
//
//     return(
//       <div>
//
//         <h2>Temperature in {city} is {temp}</h2>
//
//       </div>
//     );
//
//   }
// });

var DisplayWeather = ({temp,city})=>{
  return(
    <div>

      <h2 className="text-center">Temperature in {city} is {temp}</h2>

    </div>
  );
}

module.exports = DisplayWeather;
