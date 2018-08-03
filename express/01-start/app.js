
//
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello express');
});

app.listen(3000,'127.0.0.1',()=>{
	console.log('app running at 127.0.0.1:3000')
})