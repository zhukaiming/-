

//异步写文件
const fs = require('fs');

//1,打开文件
fs.open('./001.txt','w',(err,fd)=>{//通过回调函数的方式返回函数
	if(!err){//成功打开
		fs.write(fd,'bbbb',(err)=>{
			if(!err){
				console.log('success write...');
				//close
				fs.close(fd,(err)=>{
					if(!err){
						console.log('close success')
					}else{
						console.log('close err',err)
					}
				})
			}else{
				console.log('write file err',err)
			}
		})
	}else{
		console.log('open file err',err)
	}
});//有返回值,'w'覆盖