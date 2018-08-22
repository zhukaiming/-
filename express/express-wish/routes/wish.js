

//调用WishModel模型进行相应的增加删除操作
const Router  = require('express').Router;

const WishModel = require('../models/wish.js')
const router = Router();

let getRandom = (min,max)=>{
	return Math.round(min + (max-min)*Math.random());
}
let getColor = ()=>{
	const colorArr = ['red','yellow','blue','green'];
	return colorArr[getRandom(0,colorArr.length - 1)];
}
//增加愿望
router.post('/',(req,res)=>{
	//console.log('osu')
	//console.log(req.body)
	
	let obj = req.body;
	obj.color = getColor();
	WishModel.insertMany(obj,(err,docs)=>{
		let result = {};
		if(!err){
		//4.返回结果到前端
			result = {
				status:0,
				data:docs[0]
			}

			//4.返回成功的结果
			//console.log(resstring)
		}else{
			result = {
				status:10,
				message:'失败'
			}
		}
		let resstring = JSON.stringify(result);//stringify把result对象转化为字符
		res.end(resstring);//end里面需要是字符串				
	})
	
		
})

//删除
router.delete('/:id',(req,res)=>{
	//console.log(req.params.id)
	let id = req.params.id;//获取id
	
	WishModel.remove({_id:id},(err,result)=>{
		if(!err){
			let resstring = JSON.stringify({
				status:0
			});//stringify把result对象转化为字符
			res.end(resstring);//end里面需要是字符串
		}			
	})	
	
})

module.exports = router;
