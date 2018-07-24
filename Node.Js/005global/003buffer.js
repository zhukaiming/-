

//00-ff   16进制数
//0-255   10进制
//00000000-11111111  二进制

//Buffer类似于数组,用来存储二进制数的数组
/*const buf = new Buffer('hello');
console.log(buf)
console.log(buf.length)*/

//node 中一个汉字 = 3B(字节)
const buf = new Buffer.from('淘宝');//通过二进制的方法存储
// console.log(buf)
// console.log(buf.length)

// const buf = Buffer.alloc(10,'a')
//const buf = Buffer.alloc(10)
buf[0] = 10;//十
buf[1] = 0x10;//十六进制
buf[9] = 11;
buf[10] = 11;//不能长度范围，不然存储不了

console.log(buf.toString())