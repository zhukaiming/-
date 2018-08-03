
//
const express = require('express');

const app = express();

app.use(express.static('public'));//
//对所有请求做统一处理
app.all('/',(req,res,next)=>{
	console.log('all');
	next();
})
// 匹配 acd 和 abcd

app.get('/ab?cd', function (req, res,next) {
	console.log('page..');
	next();
},(req,res)=>{
	console.log('home...')
  res.send('hello');//请求结束

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

//app.use('user',require(''));
app.listen(3000,()=>{
	console.log('app running at 127.0.0.1:3000')
})