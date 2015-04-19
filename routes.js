Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/login', function() {
	this.render('login');
});

Router.route('/create', function() {
	this.render('create');
});

Router.route('/profile', function() {
	this.render('profile');
});

Router.route('/db', function() {
	this.render('db');
});