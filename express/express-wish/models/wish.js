//
const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
	//储存的内容

	content:{
		type:String
	},
	color:{
		type:String
	}
});

//3用定义好的schema生成model模型
const WishModel = mongoose.model('wish',WishSchema);

module.exports = WishModel;