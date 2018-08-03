

//
const fs = require('fs');

//1,打开文件
let fd = fs.openSync('./001.txt','w');//有返回值,'w'覆盖
// let fd = fs.openSync('./001.txt','a');//有返回值,'a'追加
console.log(fd)
//2，写入内容
fs.writeSync(fd,'aaa');
//3保存退出
fs.closeSync(fd);