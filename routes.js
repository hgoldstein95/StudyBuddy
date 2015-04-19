Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function() {
	this.render('home');
});

Router.route('/profile', function() {
	this.render('profile');
});

Router.route('/about', function() {
	this.render('about');
});

Router.route('/TEST', function() {
	this.render('universityChooser');

});

Router.route('/course', function() {
	this.render('course');
});