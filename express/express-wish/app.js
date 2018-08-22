

//routes相当于controller,

const express = require('express')
const swig = require('swig');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//1链接启动数据库
//1.链接数据库,'mongodb://localhost:27017/zhu':链接数据库的地址
mongoose.connect('mongodb://localhost:27017/zhu',{useNewUrlParser:true});
const db = mongoose.connection;//
db.on('error',(err)=>{
	throw err;
});
db.once('open', function(){

  	console.log('open connect...')

})

const app = express();

//2配置模板
swig.setDefaults({
  cache: false//
})
//定义模板引擎
app.engine('html',swig.renderFile);
app.set('views', './views');//配置模板的存放目录
app.set('view engine','html');//注册模板引擎
//3:配置静态资源

app.use(express.static('public'));//托管静态文件

//4:添加处理post请求的中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//5:处理路由
app.use("/",require('./routes/index.js'));
app.use("/wish",require('./routes/wish.js'));

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})