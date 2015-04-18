Session.set('hasAccount', true);

Template.create.events({
	'submit form': function(evt) {
		evt.preventDefault();
		console.log(evt.target.firstName.value)
	}
});

Template.login.events({
	'click a#notUser': function(evt) {
		Session.set('hasAccount', false);
	}
});

Template.navigation.hasAccount = function() {
	return Session.get('hasAccount')
};