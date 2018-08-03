
const mongoose = require('mongoose');

const User  =require('./models/user.js');
const Blog  =require('./models/blog.js');

const moment = require('moment')
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
	
	User.insertMany({
		name:"zhu",
		phone:17838465566,
		age:18,
		sex:"male",
		locked:"false",
		friends:["zhang","zhu"]

		},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err...',err)
		}
	})
	
	/*
	User.find({_id:'5b62b05c911e6aa11804da1a'},(err,doc)=>{
		if(!err){
			//console.log(doc)
			console.log(moment(doc.createdAt).format('MMMM Do YYYY, h:mm:ss a'))
		}else{
			console.log('err...',err)
		}
	})
	*/
	/*
	Blog.insertMany({Author:'5b62b23e750441adac759309',title:"我是谁",content:"我在哪"},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err...',err)
		}
	})	
	*/
	/*
	User.distinct('name',{},(err,result)=>{
		if(!err){
			console.log('result',result);
		}else{
			console.log('err',err);
		}
	})
	*/
});

