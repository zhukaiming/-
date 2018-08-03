
//模拟可读流
const EventEmitter = require('stream');
//
class LikeReadableStream extends EventEmitter{
	/*
	constructor(data,offsetLength){
		super();
		this.data = data;
		this.offsetLength = offsetLength;
		//'newListener'事件,当有新的监听被添加是触发,回调函数接受两个参数分别是添加的事件名称和函数的
		this.on('newListener',(eventName)=>{
			if(eventName === 'data'){
				console.log(this.listeners('data'));
				setInmediate(()=>{
					this._dispatch();
				});
			}
		})
	}
	*/
	constructor(data,offsetLength){
		super();
		this.data = data;
		this.offsetLength = offsetLength;
		this.on('newListener',(eventName)=>{
			if(eventName === 'data'){
				console.log(this.listeners('data'));
				setImmediate(()=>{
					this._dispatch();
				});
			}
		})
	}	

	_dispatch(){
		// console.log('dispatch');
		//截取长度
		let totalLength = this.data.length;//
		let restLength = totalLength;

		while(restLength>0){
			let start = totalLength - restLength;
			let end = start + this.offsetLength;
			let tmp = this.data.slice(start,end);
			let buf = Buffer.from(tmp);
			this.emit('data',buf);
			restLength -= this.offsetLength;
		}
		this.emit('end');
	}

}

let data = 'aaaaaaaaaabbbbbbbbbb';

const rs = new LikeReadableStream(data,10);

rs.on('data',(chunk)=>{//接收chunk
	console.log(chunk.toString());

})
rs.on('end',()=>{
	console.log('end');
})