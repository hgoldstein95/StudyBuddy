Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/profile', function() {
	this.render('profile');
});

Router.route('/TEST', function() {
	this.render('universityChooser');
});