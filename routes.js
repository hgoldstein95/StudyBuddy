Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/home', function() {
	this.render('home');
});

Router.route('/login', function() {
	this.render('login');
});

Router.route('/create',function() {
	this.render('create');
});