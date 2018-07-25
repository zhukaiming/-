

//
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const filePath = './data.json';
//callback
let add = (name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			//把data转化成对象
			let obj = JSON.parse(data);
			obj.push({
				id:uuidv1(),
				name:name
			})
			//把obj转化为字符串
			let str = JSON.stringify(obj);
			//异步写文件,str写入的数据
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,obj);
					console.log('write success')
				}else{
					callback(err)
					// console.log('write err',err)
				}
			})
		}else{
			callback(err)
			// console.log('read err',err)
		}
	})
}
//
let get = (id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			//
			let obj = JSON.parse(data);
			let result  = null;
			//遍历对象var
			//
			/*
			obj.forEach((var)=>{
				if(var[id] == id){
					result = var;
					return false;//终止循环
				}
				console.log(var);
			})
			*/
			/*
			obj.every((var)=>{
				if(var[id] == id){
					result = var;
					return false;
				}
				console.log(var);
			})
			//只要有真，结束
			//some可以实现
			*/
			obj.some((val)=>{
				if(val['id'] == id){
					result = val;
					return true;
				}
				console.log(val);
			})
			
			/*
			//for可以实现
			for(key in obj){
				if(obj[key]['id'] == id){
					result = obj[key];
					break;
				}

				// console.log(var);	
			}
			*/
			callback(null,result);
		}else{
			callback(err);
		}
	})
}
// console.log(get)
/*
add('zhang',(err,data)=>{
	if(!err){
		console.log(data)
	}else{
		console.log('fail',err)
	}
})
*/
//2查询
/*
get('1381c0f0-8fea-11e8-a314-17cfbd3f3029',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('fail',err)
	}	
})
*/
//3更新
/*
let updata = (id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			obj.some((val)=>{
				if(val['id'] == id){
					val['name'] = name;
					return true;
				}
			})
			// console.log(obj);
			// 更改文件的name
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,obj);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})
}
*/
//4删除
let remove = (id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			//过滤
			let newObj = obj.filter((val)=>{//这里val指的是json中的对象
				return val['id'] != id;
			});
			// console.log(obj);
			// 更改文件的name
			let str = JSON.stringify(newObj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,newObj);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})	
}

//更改name为Mike
/*
updata('1381c0f0-8fea-11e8-a314-17cfbd3f3029','Mike',(err,data)=>{
	if(!err){
		console.log(data)
	}else{
		console.log('updata err',err)
	}
})
*/
remove('1381c0f0-8fea-11e8-a314-17cfbd3f3029',(err,data)=>{
	if(!err){
		console.log(data)
	}else{
		console.log('remove err',err)
	}
})


