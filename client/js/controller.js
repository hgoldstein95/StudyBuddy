Session.set('hasAccount', true);

Template.create.events({
	'submit form': function(evt) {
		evt.preventDefault();
		console.log(evt.target.firstName.value)
	}
});

Template.login.events({
	'click a#notUser': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', false);
	}
});

Template.create.events({
	'click a#goBack': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', true);
	}
});

Template.navigation.hasAccount = function() {
	return Session.get('hasAccount')
};