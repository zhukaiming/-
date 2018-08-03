//
var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	//储存的内容
	name: String,
	age: Number,
	sex:String
});

//3用定义好的schema生成model模型
const User = mongoose.model('User', UserSchema);

module.exports = User;