
const mongoose = require('mongoose');

const User  =require('./models/user.js')
//console.log(mongoose);
//1链接数据库,'mongodb://localhost:27017/zhu':链接数据库的地址
mongoose.connect('mongodb://localhost:27017/zhu',{useNewUrlParser:true});

const db = mongoose.connection;//

db.on('error',(err)=>{
	throw err;
});
db.once('open', function(){
  	console.log('open connect...')
	//2定义Schem
	//const UserSchema = new mongoose.Schema({
		//储存的内容
		//name: String,
		//age: Number,
		//sex:String
	//});
	//3用定义好的schema生成model模型
	//
	//4用model操作数据库
	//model的第一个参数会生成数据库中集合的名称,数据库中会把它变成小写加复数
	
	User.distinct('name',{},(err,result)=>{
		if(!err){
			console.log('result',result);
		}else{
			console.log('err',err);
		}
	})
});

