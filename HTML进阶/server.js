

//
var http = require('http');//
var fs = require('fs');//引入模块
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req,res){//创建server实例,req请求对象，res返回对象
 	res.setHeader('Content-Type',"text/html;charset=UFT-8");//

 	//跨域
 	//res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:3000")//1:设置可以跨域的域名
 	//res.setHeader("Access-Control-Allow-Origin","http://www.kuazhu.com")//2:
 	//res.setHeader("Access-Control-Allow-Headers","abc");//复杂请求
 	//接受参数?
 	var urlStr = req.url;
 	console.log('cookie',req.headers.cookie)
 	console.log(urlStr);
 	if(urlStr == '/favicon.ico'){
 		res.statusCode = 404;
 		res.end();
 	}
 	//POST请求
 	if(req.method == "POST"){//处理POST请求
 		var body = '';
 		req.on('data',function(chunk){//循环触发
 			body += chunk;
 		});
 		req.on('end',function(){
 			//拿到参数后做相应处理
 			var bodyobj = querystring.parse(body);//解析成对象
 			var strBody = JSON.stringify(bodyobj);
 			res.statusCode = 200;
 			res.end(strBody);
		});

 	}else{//处理GET请求

	 	if(urlStr.search(/\?/) != -1){
	 		var prams = url.parse(urlStr.true).query;//解析成对象
	 		//拿到参数后做相应处理
	 		var pramsStr = JSON.stringify(prams);//转化为json
	 		res.statusCode = 200;
	 		res.end(pramsStr);
	 	}


	 	var filePath = "./"+urlStr;//读取的路径.当前目录下的文件
	 	fs.readFile(filePath,function(err,data){//异步地读取一个文件的全部内容,不能立马得到返回值
	 		if(err){//不能读取到
	 			console.log('read file error::',err);
	 			res.statusCode = 404;
	 			res.end('file not found'); 
	 		}else{
	 			res.statusCode = 200;
	 			res.setHeader('Set-cookie',['zkid=qweasd']);
	 			res.end(data);//返回data

	 		}
	 	})
 	}
});
server.listen(3000, '127.0.0.1', function(){//运行
	console.log('Server running at http://127.0.0.1');
});