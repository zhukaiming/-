//
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
	//储存的内容
	Author: 
	{type:mongoose.Schema.Types.ObjectId},
	title:String,
	content:String
});

//3用定义好的schema生成model模型
const Blog = mongoose.model('Blog',BlogSchema);

module.exports = Blog;