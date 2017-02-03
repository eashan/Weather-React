
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://'+req.hostname+req.url);

  }
  else{
    next();
  }
});
app.use(express.static('public'));

app.listen(PORT, function(){

  //ReactDOM.render(<main />, document.querySelector('container'));
  console.log('Express Server is active on port '+ PORT);

});
