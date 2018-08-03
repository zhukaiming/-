//
//路由模块化
const express = require('express');
//const useRout = require('./Route/user.js');

const app = express();

//托管静态文件
app.use(express.static('public'));//

app.use('/user',require('./Route/user.js'));//
app.use('/blog',require('./Route/blog.js'));//

app.listen(3000,()=>{
	console.log('app running at 127.0.0.1:3000')
})