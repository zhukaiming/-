
//
const swig = require('swig');

class Index{
	index(req,res,...args){
		let template = swig.compileFile(__dirname +'/../View/Index/index.html');//__dirname绝对路径
		let html = template({});
		res.setHeader('Content-type','text/html;charset=UTF-8');//响应头
		res.end(html);	
	}
}

module.exports = new Index();