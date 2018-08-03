
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
	/*
	User.insertMany({
		name:"zhu",
		phone:13838465566,
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
	*/
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
	Blog.insertMany({Author:'5b6305e7e2754bbcac0c9208',title:"I am title",content:"I am content"},(err,doc)=>{
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
	//自定义实例
	/*
	User.findOne({name:"zhu"},(err,doc)=>{
		//doc是User的实例
		
		doc.findMyBlogs((err,docs)=>{
			console.log(docs)
		})
		
	})
	*/
	/*
	User.findByPhone('13838465566',(err,doc)=>{
		//console.log(doc)
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}
	})
	*/
	/*
	Blog.
	findOne({title:'I am title'}).
	populate('Author').
	then((doc)=>{
		console.log(doc)
	})
	*/
	//
	/*
	Blog
	.findMyBlogs({},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('err',err)
		}		
	})
	*/
	/*
	let promise = Blog
	.findMyBlogs((doc)=>{
		console.log(doc)		
	})
	*/
});

