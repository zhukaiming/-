
//移除事件


//引入事件
const EventEmitter = require('events');
//继承类
class MyEmitter extends EventEmitter{

}
const myEmitter = new MyEmitter();

let fn1 = ()=>{//接受参数
	//console.log(this);//这里的this就是MyEmitter对象
	console.log('test event1');
}
let fn2 = ()=>{//接受参数
	console.log('test event2');
}
myEmitter.on('test',fn1)
myEmitter.on('test',fn2)
console.log(myEmitter.listeners('test'));
//移除事件
myEmitter.removeListener('test',fn1);
// myEmitter.off('test',fn1);//需要node的版本在10以上
//
myEmitter.emit('test');
