//引用
const m4  = require('./004module4.js');//拿到接收返回module.exports对象,引用这个文件有一个返回值

console.log('m4::',m4.obj1)
m4.fn();