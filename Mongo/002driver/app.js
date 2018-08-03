

//
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';

const dbName = 'myproject';
// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser:true},function(err,client){
 // assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);


  // 
  const ins = db.collection('documents');//documents集合名

  //插入
  /*
  ins.insertMany([
  	{name:"zhu"},{name:"zhang"}
  ],function(err,result){
  	if(!err){
  		console.log(result)
  	}else{
  		console.log('err')
  	}
  })
  */
  //查找
  /*
  ins.find({}).toArray(function(err,docs){
    if(!err){
      console.log(docs)
    }else{
      console.log('err...')
    }
  })
  */
  /*
  ins.find({name:"zhu"}).toArray(function(err,result){
    if(!err){
      console.log(result)
    }else{
      console.log('err...')
    }
  })
  */
  //更新
  /*
  ins.updateOne({ name : "wang" }
    , { $set: { b : 1 } }, function(err, result) {
    if(!err){
      console.log(result);
    }else{
      console.log('err...')
    }
  })
  */
  //删除
  ins.deleteOne({ name : "wang" }, function(err, result) {
    if(!err){
      console.log(result);
    }else{
      console.log('err...');
    }    
  })
  client.close();
});