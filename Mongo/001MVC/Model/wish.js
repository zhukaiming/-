

//
const fs = require('fs');
const uuidv1 = require('uuid/v1');

// const MongoClient = require('mongodb').MongoClient;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';
//callback
let getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random());
}

let getDb = (callback)=>{
	MongoClient.connect(url,{useNewUrlParser:true},function(err,client){
	 // assert.equal(null, err);

	  const db = client.db(dbName);//获取数据，获取集合 
	  
	  callback(db,client);
	})
}

//
const colorArr = ['red','yellow','blue','green']

let add = (options,callback)=>{
	getDb((db,client)=>{
		const ins = db.collection('documents');////documents集合名
		//把data转化成对象
		//let obj = JSON.parse(data);
		options._id = uuidv1();
		options.colorArr = colorArr[getRandom(0,colorArr.length-1)];
		ins.insertOne(options,function(err,result){
			if(!err){
		 	callback(null,options)
			}else{
		 	console.log(err)
			}			
			client.close();
		})		
	})
	/*
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			//把data转化成对象
			let obj = JSON.parse(data);
			options.id = uuidv1();
			options.colorArr = colorArr[getRandom(0,colorArr.length-1)]
			obj.push(options);
			//把obj转化为字符串
			let str = JSON.stringify(obj);//stringify
			//异步写文件,str写入的数据
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,options);
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
	*/
}

//
let get = (callback)=>{
	getDb((db,client)=>{
		const ins = db.collection('documents');////documents集合名
		ins.find({}).toArray(function(err,docs){
		  if(!err){
		  	callback(null,docs)
		  }else{
		  	callback(err)
		  }
		  client.close();
		})
	})
	//
	/*
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			callback(null,obj);
		}else{
			callback(err);
		}
	})
	*/
}

//3更新

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

//4删除
let remove = (id,callback)=>{
	getDb((db,client)=>{
		const ins = db.collection('documents');////documents集合名
		ins.deleteOne({_id:id},function(err,docs){
		  if(!err){
		  	callback(null)
		  }else{
		  	callback(err)
		  }
		  client.close();
		});
	})
	/*
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
					callback(null);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})
	*/
}

module.exports = {
	get:get,
	add:add,
	remove:remove
}
