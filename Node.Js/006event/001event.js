

//引入事件
const EventEmitter = require('events');
//继承EventEmitter类
class MyEmitter extends EventEmitter{

}
const myEmitter = new MyEmitter();
//设置事件监听个数,默认的为10个
myEmitter.setMaxListeners(12);
//触发事件
myEmitter.on('test',()=>{
	console.log('test event1');
})
myEmitter.on('test',()=>{
	console.log('test event2');
})
myEmitter.on('test',()=>{
	console.log('test event3');
})
myEmitter.on('test',()=>{
	console.log('test event4');
})
myEmitter.on('test',()=>{
	console.log('test event5');
})
//监听事件相当于tigger
myEmitter.emit('test');

//console.log(EventEmitter);