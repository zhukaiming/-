const fs = require('fs');

//同步写文件
// fs.writeFileSync('./001.txt','sdsd',{flag:'w'});//{flag:'w'}参数'w'覆盖'a'追加

//同步读文件
// let data = fs.readFileSync('./001.txt');
// console.log(data.toString());

//异步写
/*
//'pppp'写入的内容
fs.writeFile('./001.txt','pppp',{flag:'w'},(err)=>{
	if(!err){//写入成功
		console.log('write success')
	}else{
		console.log('write err')
	}
});
*/
//异步读,读取'./001.txt'
fs.readFile('./001.txt',(err,data)=>{
	if(!err){//写入成功
		console.log('read success')
		console.log(data.toString())
	}else{
		console.log('read err',err)
	}
});