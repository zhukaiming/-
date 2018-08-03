
const http = require('http');
const url = require('url');
const querystring = require('querystring')
const server = http.createServer((req,res)=>{
	//req可读流
	//res可写流
	//
	//目的:解析字符串，返回对象
	//1.
	const myUrl = new url.parse(req.url);//url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象
	console.log(querystring.parse(myUrl.query))
	//2.
	//const myUrl = new url.parse(req.url,true);//url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象
	//console.log(myUrl.query)

	res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
	res.end('<h1>页面</h1>');	
	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})