

//
const Router  = require('express').Router;

const WishModel = require('../models/wish.js')
const router = Router();

//显示首页
router.get('/',(req,res)=>{
	WishModel.find({},(err,data)=>{
		if(!err){
			res.render('index',{
				data:data
			})
		}else{
			console.log(err);
		}			
	})
})

module.exports = router;
