//

//前端请求,服务端接收请求
//路由模块化
const express = require('express');
const bodyParser = require('body-parser')
//const useRout = require('./Route/user.js');

const app = express();

//托管静态文件
app.use(express.static('public'));//
//添加处理post请求的中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//接收前台发来的数据,然后引用./Route/user.js文件,调用user里面的方法
app.use('/',(req,res)=>{
	res.send('post..')
})
// app.use('/user',require('./Route/user.js'));
// app.use('/blog',require('./Route/blog.js'));//

app.listen(3000,()=>{
	console.log('app running at 127.0.0.1:3000')
})