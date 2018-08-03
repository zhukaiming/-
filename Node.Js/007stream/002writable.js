

//结构解析
const {Writable} = require('stream');

// console.log(stream);//是一个对象
// console.log(Writable);
//继承Writable类
class MyWriter extends Writable{

	constructor(){
		super();
	}

	//_write方法
	_write(chunk,encoding,callback){//chunk要写入的数据
		console.log(chunk.toString());
		callback();
	}
}

const writer = new MyWriter();
// console.log(writer)
/*
writer.on('finish',()=>{
	console.log('finish')
})
writer.write('aa','utf8',()=>{
	console.log('aa11')
})
writer.end();
*/
//可读流
//可读流通过管道放到可写流中
process.stdin.pipe(writer);