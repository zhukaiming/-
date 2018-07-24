
//监听,触发事件


//引入事件
const EventEmitter = require('events');
//继承类
class MyEmitter extends EventEmitter{

}
const myEmitter = new MyEmitter();
//设置事件监听个数,默认的为10个
myEmitter.setMaxListeners(12);
//事件绑定
//触发事件
// console.log(myEmitter.on === myEmitter.addListener);
/*
myEmitter.on('test',(arg1,arg2)=>{//接受参数
	console.log(this)
	console.log('test event1',arg1,arg2);
})
*/
myEmitter.on('test',function(arg1,arg2){//接受参数
	console.log(this);//这里的this就是MyEmitter对象
	console.log('test event1',arg1,arg2);
})
//once值触发一次
/*
myEmitter.once('test',()=>{
	console.log('test event1');
})
//
myEmitter.addListener('test',()=>{
	console.log('test event1');
})
*/
//监听事件相当于tigger
// myEmitter.emit('test','aa','ss');//传递参数
myEmitter.emit('test',...['aa','ss']);//拓展运算符传递数组

//console.log(EventEmitter);