var express = require('express');
var exSession = require('express-session');
var bodyParser = require('body-parser');


var signup = require('./controllers/signup');
var login  = require('./controllers/login');


var app = express();

//config
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: ' ', saveUninitialized: true, resave: false}));
app.use(function(req, res, next)
{
  res.locals.uid = req.session.uid;
  res.locals.type = req.session.type;
  next();
});

app.use('/', login);
app.use('/signup', signup);


app.listen(3000, function()
{
	console.log('_____________________________LABTASK\nPORT NO. 3333\n_____________________________');
});

app.get('/', function(req, res)
{
	res.render('login/index');
});

app.get('/login', function(req, res)
{
	res.render('login/index');
});
