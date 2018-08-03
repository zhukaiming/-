
//
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello express');
});
app.post('/', function (req, res) {
  res.send('Hello post');
});
app.put('/', function (req, res) {
  res.send('Hello put');
});
app.delete('/', function (req, res) {
  res.send('Hello del');
});
//托管静态文件
app.use(express.static('public'));//

app.use('user',require(''));
app.listen(3000,()=>{
	console.log('app running at 127.0.0.1:3000')
})