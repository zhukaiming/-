

//上传文件,图片
const http = require('http');
const url = require('url');
const querystring = require('querystring')
const formidable = require('formidable');
const util = require('util');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	//req可读流
	//res可写流
	//
	if(req.method.toUpperCase() === 'POST'){

		//formidable模块实现了上传和编码图片和视频
	    let form = new formidable.IncomingForm();
	    form.uploadDir = "./upload";
	    form.keepExtensions = true;
	    form.parse(req, function(err, fields, files) {//files上传的文件

	    	//文件改名
	    	let oldPath = './' + files.img.path;
	    	//获取拓展名
	    	let extname = path.extname(oldPath);
	    	//新的名字
	    	let newPath = './upload/' + (new Date()).getTime() + Math.random() + extname;

	    	fs.rename(oldPath,newPath,(err)=>{
	    		if(!err){
			    	res.writeHead(200, {'content-type': 'text/plain'});
			    	res.write('received upload:\n\n');
			    	res.end(util.inspect({fields: fields, files: files}));//util	    			
	    		}
	    	})

	    });		
	}


	
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000')
})