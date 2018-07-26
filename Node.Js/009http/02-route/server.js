
//服务器搭建

const http = require('http'); 
const fs = require('fs');
// console.log(http)
//创建server
const server = http.createServer((req,res)=>{
	//req可读流
	//res可写流
	let patnName = req.url;
	console.log(req.url)
	if(patnName === '/index.html'){

		//读取html
		fs.readFile('./index.html',(err,data)=>{
			if(!err){//读取成功
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					res.end(data);			
			}else{
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');

					//res.end();
					res.statusCode = 404;	
					res.end('<h1>读取失败..</h1>');				
			}
		})
	}else if(patnName === '/list.html'){
		fs.readFile('./list.html',(err,data)=>{
			if(!err){//读取成功
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					res.end(data);	
			}else{
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					//res.end();
					res.statusCode = 404;
					res.end('<h1>读取失败...</h1>');					
			}
		})
	}else if(patnName === '/index.css'){
		fs.readFile('./index.css',(err,data)=>{
			if(!err){//读取成功
					res.setHeader('Content-type','text/css;charset=UTF-8');//响应头
					//res.write('hello 你好');
					res.end(data);	
			}else{
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					//res.end();
					res.statusCode = 404;
					res.end('<h1>读取失败...</h1>');					
			}
		})
	}else if(patnName === '/index.js'){
		fs.readFile('./index.js',(err,data)=>{
			if(!err){//读取成功
					res.setHeader('Content-type','application/x-javascript;charset=UTF-8');//响应头
					//res.write('hello 你好');
					res.end(data);	
			}else{
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					//res.end();
					res.statusCode = 404;
					res.end('<h1>读取失败...</h1>');					
			}
		})
	}else if(patnName === '/pite.jpg'){
		fs.readFile('./pite.jpg',(err,data)=>{
			if(!err){//读取成功
					res.setHeader('Content-type','image/jpeg;charset=UTF-8');//响应头
					//res.write('hello 你好');
					res.end(data);	
			}else{
					res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					//res.end();
					res.statusCode = 404;
					res.end('<h1>读取失败...</h1>');					
			}
		})
	}
	else{
		res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
					//res.write('hello 你好');
					res.statusCode = 404;
					res.end('<h1>页面丢失....</h1>');
	}

})
// console.log(server)
//
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})