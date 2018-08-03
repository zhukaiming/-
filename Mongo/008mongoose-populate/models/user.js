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
	},
	friends:{
		type:Array
	}
});

//自定义实例
//通过在UserSchema.method上自定义方法让User具备不同的功能
//在UserSchema.method上添加findMyBlogs方法
//不能使用()=>函数,一旦使用this就确定了,而我们需要谁调用findMyBlogs,this就是谁
/*
UserSchema.methods.findMyBlogs = function(callback){//返回到doc实例上,
	//console.log(this)
	console.log(this._id) 
	//console.log(this.model('Blog'))
	//this的model方法获取Blog,调用find(),找到this._id
	
	this.model('Blog').find({Author:this._id},(err,docs)=>{
		callback(err,docs)
	})
	
}
*/
UserSchema.statics.findByPhone = function(phone,callback){
	//console.log(this)
	//console.log(this === this.model('User'))
	this.find({phone:phone},(err,docs)=>{
		callback(null,docs)
	})
}
//3用定义好的schema生成model模型
const User = mongoose.model('User', UserSchema);

module.exports = User;