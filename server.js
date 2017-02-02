/*import React from 'react';
import ReactDOM from 'react-dom';

const main = () => {

  return (
    <div>
      <h1> Hello React!</h1>
    </div>
  );


};
*/
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){

  //ReactDOM.render(<main />, document.querySelector('container'));
  console.log('Express Server is active');

});
