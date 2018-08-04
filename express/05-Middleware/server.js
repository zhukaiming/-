
//
const http = require('http');

function express(){
	//存放中间件
	let fns = [];
	//每一次请求都会执行
	let app = function(req,res){
		let i = 0;
		function next(){
			let fn = fns[i++];//执行到fn为空
			if(!fn){//如果fn为空,返回
				return;
			}
			fn(req,res,next);
		}
		next();
	}
	app.use = function(fn){
		fns.push(fn);
	}
	return app;
}
const app = express();
app.use('/',(req,res,next)=>{
	console.log('before1..')
	next();
	console.log('after1..')
})
app.use('/',(req,res,next)=>{
	console.log('before2..')
	next();
	console.log('after2..')
})
app.use('/',(req,res,next)=>{
	console.log('before3..')
	next();
	console.log('after3..')
})
const server = http.createServer(app);
server.listen(3000,()=>{
	console.log('app running at 127.0.0.1:3000')
})