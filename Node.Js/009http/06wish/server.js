
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('./mime.json');
const url = require('url');
const querystring = require('querystring');
const wishmoude = require('./wishmoudle.js');
const swig = require('swig');

const server = http.createServer((req,res)=>{
	//1浏览器端发送请求
	//2服务器端接收请求,数据
	//
	console.log('req.url',req.url,req.method);
	let requrl = url.parse(req.url,true);//接收参数，返回query对象
	let pathname = requrl.pathname;
	let filename = req.url;
	//3:根据请求的类型做相应处理,如果请求的类型是'/index.html' || pathname === '/',则
	if(pathname === '/index.html' || pathname === '/'){
		//获取数据
		//5调用定义好的get方法，读取文件,通过回调的方法
		wishmoude.get((err,data)=>{
			if(!err){
				//请求页面
				//4存储数据,从文件读取文件，再返回
				//4.1把数据拼接成html页面
				/*
				let html = `<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<title>Document</title>
					<link rel="stylesheet" href="css/index.css">
				</head>
				<body>
					<div class = "wall">`
			//6动态生成数据;val存储的对象
			data.forEach((val)=>{
				html += `<div class="wish" style = "background: ${val.color}" >
					<a href="javascript:;" class = "close" data-id = "${val.id}"></a>
					${val.content}
				</div>`			
				})

				html += `</div>
					<div class="form">
						<div>
							<textarea name="content" id="content" cols="30" rows="20"></textarea>
						</div>
						<div>
							<a href="javascript:;" class = "sub-btn">开始</a>
						</div>
					</div>
				</body>
				<script src = "js/jquery-1.12.4.min.js"></script>
				<script src = "js/jquery.pep.js"></script>
				<script src = "js/index.js"></script>
				</html>`;
				*/
				//返回html
				//4.3把html通过res可写流返回到前台，客户端
				let template = swig.compileFile(__dirname +'/static/index.html');//__dirname绝对路径
				let html = template({
					data:data
				});
				res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
				//res.write('hello 你好');
				res.end(html);
			}else{
				callback(err);
			}
		});
	//添加wish
	}else if(pathname === '/add' && req.method.toUpperCase() == 'POST'){//接收ajax请求
		//获取前端的参数
		//1.获取请求的数据
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})
		req.on('end',()=>{
			//
			//console.log();
			//2.拿到数据,转化为对象
			let obj = querystring.parse(body);//
			console.log(obj)
			//3.存储到文件
			wishmoude.add(obj,(err,data)=>{
				let result = {};
				if(!err){
				//4.返回结果到前端
					result = {
						status:0,
						data:data
					}

					//4.返回成功的结果
					//console.log(resstring)
				}else{
					result = {
						status:10,
						message:'失败'
					}
				}
				let resstring = JSON.stringify(result);//stringify把result对象转化为字符
				res.end(resstring);//end里面需要是字符串

			})
		})
	}
	//删除
	else if(pathname === '/del'){
		//
		console.log(requrl)
		//requrl中的query对象的id
		//调用remove方法把文件里面对应的id删除，删除成功后把删除成功的信息返回到前台
		wishmoude.remove(requrl.query.id,(err)=>{
			if(!err){
				let resstring = JSON.stringify({
					status:0
				});//stringify把result对象转化为字符
				res.end(resstring);//end里面需要是字符串
			}
		});
		

	}
	
	else{
	//静态处理
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
	}

})
//
server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})