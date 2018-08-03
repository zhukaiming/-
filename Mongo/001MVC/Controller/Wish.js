//wish方法


const wishmoude = require('../Model/wish.js');
const swig = require('swig');
const querystring = require('querystring');
class Wish{
	index(req,res,...args){
		console.log('1111',args);
		//调用get方法
		wishmoude.get((err,data)=>{
			if(!err){
				let template = swig.compileFile(__dirname +'/../View/Wish/index.html');//__dirname绝对路径
				let html = template({
					data:data
				});
				res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
				res.end(html);
			}else{
				callback(err);
			}
		});
	}
	//删除
	del(req,res,...args){
		wishmoude.remove(args[3],(err)=>{//requrl.query.id
			if(!err){
				let resstring = JSON.stringify({
					status:0
				});//stringify把result对象转化为字符
				res.end(resstring);//end里面需要是字符串
			}
		});
	}
	//添加
	add(req,res,...args){
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		})
		req.on('end',()=>{
			//
			//console.log();
			//2.拿到数据,转化为对象
			let obj = querystring.parse(body);//
			console.log(obj)
			//3.存储到文件
			wishmoude.add(obj,(err,data)=>{
				let result = {};
				if(!err){
				//4.返回结果到前端
					result = {
						status:0,
						data:data
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
	}
}

module.exports = new Wish();