
const http = require('http');
const url = require('url');
const querystring = require('querystring')
const server = http.createServer((req,res)=>{
	//req可读流
	//res可写流
	//
	if(req.method.toUpperCase() === 'POST'){
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})
		req.on('end',()=>{
			//console.log('body',body);
			//querystring.parse：该方法会把一个 URL 查询字符串 str 解析成一个键值对的集合
			let query = querystring.parse(body);
			console.log(query);
			res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
			res.end('<h1>页面</h1>');				
		})
	}


	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})