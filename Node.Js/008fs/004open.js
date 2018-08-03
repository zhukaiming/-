

//异步读文件
const fs = require('fs');

fs.open('./001.txt','r',(err,fd)=>{//
	if(!err){//open success
		let buf = Buffer.alloc(100);//新建的 Buffer 期望的长度
		fs.read(fd,buf,0,100,0,(err)=>{
			if(!err){//读取成功
				fs.close(fd,(err)=>{
					if(!err){
						console.log('close success')
						console.log(buf)
					}else{
						console.log('close err',err)
					}
				})
			}else{
				console.log('read err',err)
			}
		})
	}else{
		console.log('open err',err)
	}
})
//通过回调函数的方式返回函数