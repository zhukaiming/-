
//服务器搭建

const http = require('http'); 
// console.log(http)
//创建server
const server = http.createServer((req,res)=>{
	//req可读流
	//res可写流
	res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
	//res.write('hello 你好');
	res.end('<h1>hello 你好</h1>');
})
// console.log(server)
//
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})