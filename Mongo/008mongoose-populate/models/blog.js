//
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
	//储存的内容
	Author: 
	{
		type:
		mongoose.Schema.Types.ObjectId,
		refs:'User'
	},
	//,

	title:String,
	content:String
});

BlogSchema.statics.findMyBlogs = function(query={},callback){
	//console.log(this)
	//console.log(this.model('Blog'))
	//console.log(this === this.model('Blog'));
	/*
	this.find(query).
	populate('Author').
	then((doc)=>{
		callback(null,doc)
	}).
	catch((err)=>{
		if(!err){
			console.log('catch...')
		}else{
			console.log('err...')
		}
	})
	*/
	
	let promise = new Promise((resolve,reject)=>{
		this.find(query).
		populate('Author').
		then((doc)=>{
			callback(null,doc)
		}).
		catch((err)=>{
			if(!err){
				console.log('catch...')
			}else{
				console.log('err...')
			}
		})		
	})
	return promise;
	
	
}
//3用定义好的schema生成model模型
const Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog;