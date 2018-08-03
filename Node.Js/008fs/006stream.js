

const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');
const rs = fs.createReadStream('./rs.txt');
// console.log(rs)
// console.log(ws)
//可写流
/*
ws.on('open',()=>{
	console.log('open')
})
ws.on('close',()=>{
	console.log('close')
})
ws.on('finish',()=>{
	console.log('finish')
})
ws.write('asds')
ws.write('aaaa')
ws.end()
*/

//可读流
//监听data事件
/*
let body = '';
rs.on('data',(chunk)=>{//'data' 事件会在流将数据传递给消费者时触发,,chunk:要写入的数据
	body += chunk;
	console.log(chunk);
})
rs.on('end',()=>{//'end' 事件将在流中再没有数据可供消费时触发。
	console.log(body);
	console.log('read file end')
})
*/
//可读流中的数据通过管道放到可写流中
rs.pipe(ws);