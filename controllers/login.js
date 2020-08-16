var express = require('express');
var router = express.Router();
var username= "admin";
var password ="admin";
router.get('/', function(req, res){
	res.render('pages/login/index');
});

router.post('/', function(req, res){

	if(req.body.uname == req.body.password){
		res.redirect('pages/login');
	}else{
		res.send('invalid username/password');
	}

});

module.exports = router;
