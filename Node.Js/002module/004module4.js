//定义
//console.log(module);//module对象
//console.log(module.exports);//module对象，模块信息
//console.log(exports);//空对象
//console.log(module.exports === exports);//
let str1 = "hellow";
let obj1 = {name:'zhu',age:'20'};
let fn = ()=>{
	console.log('fn...')
}
// module.exports.obj1 = obj1;//给module.exports对象添加一个方法,传递
// module.exports.fn = fn;
// console.log('module.exports',module.exports);
// exports.obj1 = obj1;//给module.exports对象添加一个方法,传递
// exports.fn = fn;
//console.log('module.exports',module.exports);
//exports与module.exports的区别
/*
//指向了一个新的对象
//
exports = {
	str1:str1,
	obj1:obj1,
	fn:fn
}
console.log(module.exports === exports);
*/
//当导入一整个对象的时候使用module.exports
module.exports = {
	str1:str1,
	obj1:obj1,
	fn:fn
}
//一个一个添加属性导入
exports.obj1 = obj1;
exports.fn = fn;


