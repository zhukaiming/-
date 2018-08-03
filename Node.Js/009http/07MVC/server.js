
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');
const url = require('url');
const querystring = require('querystring');
const swig = require('swig');

const server = http.createServer((req,res)=>{
	//1浏览器端发送请求
	//2服务器端接收请求,数据
	//
	//console.log('req.url',req.url,req.method);
	let pathname = url.parse(req.url,true).pathname;//接收参数，返回query对象

	//3:根据请求的类型做相应处理,如果请求的类型是'/index.html' || pathname === '/',则
	//静态处理
	//1.请求路径以 /static/开始的都是静态资源

	if(pathname.startsWith('/static/')){

		//路径
		let filepath = path.normalize(__dirname + pathname);//__dirname
		//拓展名
		let extname = path.extname(filepath);
		//异步地读取一个文件的全部内容
		fs.readFile(filepath,(err,data)=>{
			if(!err){//读取成功	
					let mimeType = mime[extname] || 'text/plain';//mime[extname]
					res.setHeader('Content-type',mimeType+';charset=UTF-8');//响应头
					res.end(data);			
			}else{
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.end();
					res.statusCode = 404;	
					res.end('<h1>读取失败..</h1>');				
			}		
		})		
	}else{//动态
		console.log('server...',pathname);
		//定义数组
		let paths = pathname.split('/');//分隔符/
		let controller = paths[1] || 'Index';//不传参数默认wish
		let action = paths[2] || 'index';
		let args = paths.slice(3);//slice() 把匹配元素集合缩减为指定的指数范围的子集
		let model;
		try{//尝试执行代码块
			model = require('./Controller/'+controller);//
		}catch(err){//捕获错误的代码块
			res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
			res.end('页面丢失了');
			console.log('err:::',err);
			return;
		}
		//
		if(model[action]){//如果有action方法也就是controller的wish方法
			model[action].apply(null,[req,res].concat(args));
		}
	}

})
//
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})