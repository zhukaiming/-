

//
const Router  = require('express').Router;
const router = Router();
/*
router.use(function user(req, res, next) {
  console.log('user:',);
  next();
});
*/
router.get('/',function(req,res){
	res.send('get user...')
})
router.post('/',function(req,res){
	res.send('get user...')
})
router.put('/',function(req,res){
	res.send('get user...')
})
router.delete('/',function(req,res){
	res.send('get user...')
})
module.exports = router;
