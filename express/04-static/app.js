//
//路由模块化
const express = require('express');
//const useRout = require('./Route/user.js');

const app = express();

//app.use(express.static('public'));//
//托管静态文件
app.use(express.static('blog'));//

//如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录
//（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现
//可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件
//app.use('/static',express.static('blog'));

app.use('/user',require('./Route/user.js'));///user根目录下的user文件
app.use('/blog',require('./Route/blog.js'));//

app.listen(3000,()=>{
	console.log('app running at 127.0.0.1:3000')
})