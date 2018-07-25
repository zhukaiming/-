

//同步读文件
const fs = require('fs');

//1,打开文件
let fd = fs.openSync('./001.txt','r');//有返回值,'w'覆盖
// let fd = fs.openSync('./001.txt','a');//有返回值,'a'追加
let buf = Buffer.alloc(100);//新建的 Buffer 期望的长度

console.log(buf)
//fs.read(fd, buffer, offset, length, position, callback)
//从 fd 指定的文件中读取数据
// buffer 是数据将被写入到的 buffer。

// offset 是 buffer 中开始写入的偏移量。

// length 是一个整数，指定要读取的字节数
fs.readSync(fd,buf,0,100,0);
//3保存退出
console.log(buf);
// fs.closeSync(fd);