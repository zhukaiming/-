

//
const Router  = require('express').Router;
const router = Router();
/*
router.use(function user(req, res, next) {
  console.log('user:',);
  next();
});
*/
//
router.get('/',(req,res)=>{
	res.send('get user...')
})
router.post('/',(req,res)=>{
	/*
	let body = '';
	req.on('data',(chunk)=>{
		body += chunk;
	})
	req.on('end',()=>{
		console.log(body);
	})
	*/
	res.send('get user...')
})
router.put('/',(req,res)=>{
	res.send('get user...')
})
router.delete('/:id',(req,res)=>{
	console.log(req.params.id)
	res.send('get user...')
})
module.exports = router;
