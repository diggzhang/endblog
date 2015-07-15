var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res) {
//  res.render('index', { title: 'Express' });
//});

module.exports = function(app) {
	app.get('/', function (req, res) {
		res.render('index', { title: 'Express' });
	});

	//app.get('/go', function (req, res) {
	//	res.send('Hello World');
	//});

	// login reg post logout
	app.get('/reg', function (req, res) {
		res.render('reg', { title: '注册'} );
	});
	app.post('/reg', function (req, res) {
	});

	app.get('/login', function (req, res) {
		res.render('login', { title: '登录'} );
	})
	app.post('/login', function (req, res) {
	})

	app.get('/logout', function (req, res) {
		res.render('logout', {title:'登出'} );
	});
	app.post('/logout', function (req, res) {
	});

	app.get('/post', function (req, res) {
		res.render('post', { title: '发布'} );
	});
	app.post('/post', function (req, res) {
	});

};
