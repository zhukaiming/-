
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');
const server = http.createServer((req,res)=>{
	//
	let filename = req.url;

	if(filename.lastIndexOf('.') == -1){
		filename = filename + '/index.html';
	}
	//路径
	let filepath = path.normalize(__dirname + '/static' + filename);//__dirname
	//拓展名
	let extname = path.extname(filepath);
	//console.log(extname)
	//异步地读取一个文件的全部内容
	fs.readFile(filepath,(err,data)=>{
		if(!err){//读取成功
				res.setHeader('Content-type',mime[extname],';charset=UTF-8');//响应头
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
})
//
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})