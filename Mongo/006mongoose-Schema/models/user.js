//
const mongoose = require('mongoose');
//
const UserSchema = new mongoose.Schema({
	//储存的内容
	name: {
		type:String,
		required:[true,'用户名必须'],
		maxlength:[10,'最长为10'],
		minlength:[2,'最短为2']
	},
	phone:{
		type:String,
 		validate:{//自定义验证
            validator:function(val){
                return /1[358]\d{9}/.test(val);
            },
            message:'{VALUE} 不是合法电话号码'
        }		
		
	},
	age: {
		type:Number,
		default:10,
		//required:true,
		min:[1,'最小1'],
		max:[150,'最大150']
	},
	sex:{
		type:String,
		enum:["male","female"]
	},
	locked:{
		type:Boolean
	},
	createdAt:{
		type:Date,
		//default:date.now
	}
});

//3用定义好的schema生成model模型
const User = mongoose.model('User', UserSchema);

module.exports = User;