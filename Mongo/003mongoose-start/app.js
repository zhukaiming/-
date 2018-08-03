
var mongoose = require('mongoose');
//console.log(mongoose);
//1链接数据库,'mongodb://localhost:27017/zhu':链接数据库的地址
mongoose.connect('mongodb://localhost:27017/zhu',{useNewUrlParser:true});
/*
function getRandom(min,max){
	return Math.round(min + (max-min)*Math.random());
}
let arrl = ["zhang","wang","li","zhu","yang","huang","zheng"]
let getName = ()=>{
	return arrl[getRandom(0,arrl.length-1)];
}
*/
//
const db = mongoose.connection;//

db.on('error',(err)=>{
	throw err;
});
db.once('open', function(){
  	console.log('open connect...')
	//2定义Schem
	const UserSchema = new mongoose.Schema({
		//储存的内容
		name: String,
		age: Number,
		sex:String
	});
	//3用定义好的schema生成model模型
	const User = mongoose.model('User', UserSchema);

	//4用model操作数据库
	//model的第一个参数会生成数据库中集合的名称,数据库中会把它变成小写加复数
	//const userMode = new User({name:"zhu",age:20,sex:"male"})

	//插入

	/*
	//插入
	user.save((err,doc)=>{//异步
		if(!err){
			console.log(doc)
		}else{
			console.log('err')
		}
	})

	*/

	//查找
	//调用生成的Modex
	/*
	User.find({name:"zhu"},(err,docs)=>{
		if(!err){
			console.log(docs.toString())
		}else{
			console.log('err..',err)
		}
	})
	*/
	//修改更新
	/*
	User.update({name:"zhu"},{$set:{age:30}},(err,result)=>{
		if(!err){
			console.log(result)
		}else{
			console.log('err..',err)
		}
	})
	*/

	//删除
	/*
	User.remove({name:"zhu"},(err,result)=>{
		if(!err){
			console.log(result)
		}else{
			console.log('err..',err)
		}
	})


	*/
	//插入
	/*
	User.insertMany({name:"zhang",age:18},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	
	
	User.insertMany([{name:"zhang",age:18},{name:"tom",age:28}],(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	
	
	let promise = User.insertMany([{name:"zhang2",age:18},{name:"tom2",age:28}]);
	promise
	.then((doc)=>{
		console.log(doc)
	})
	.catch((err)=>{
		console.log('err',err)
	})
	/*
	let proty = new save({name:"zhang3",age:18});
	proty.then((doc)=>{
		console.log(doc)
	})
	*/
	//查找
	/*
	let arr = [];
	for(var i=0;i<10;i++){
		arr.push({name:getName(),age:getRandom(10,80)})
	}
	User.insertMany(arr,(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.find({name:"tom"},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.find({age:{$lt:20}},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.findOne({age:{$lt:20}},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.findById(_id:'5b6261ee9d53a546b4455996',(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.update({age:{$lt:70}},{$set:{name:"zhu"}},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.update({_id:'5b627d661b286b9e00db03fb'},{$set:{name:"zhu"}},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.updateOne({age:{$lt:40}},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.updateOne({age:{$lt:40}},{ multi: true },(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	User.updateOne({age:{$lt:40}},{$set:{sex:"male"}},{ multi: true },(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})	
	*/
	/*
	User.updateMany({age:{$lt:60}},{$set:{sex:"male"}},{ multi: true },(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	
	User.distinct('app',{age:{$lt:60}},(err,result)=>{
		if(!err){
			console.log('result',result);
		}else{
			console.log('err',err);
		}
	})
});

