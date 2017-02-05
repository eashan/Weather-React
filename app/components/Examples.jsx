var React = require('react');
var {Link} = require('react-router');

//For Stateless Components
var Examples = (props)=>{
  return(
  <div>
    <h1 className="text-center"> Examples </h1>
    <p> Here are a few example Locations to try out</p>
    <ol>
      <li>
        <Link to="/?location=Mumbai">Mumbai</Link>
      </li>
      <li>
        <Link to="/?location=Rio">Rio</Link>
      </li>
    </ol>
  </div>
  );
};
module.exports = Examples;
