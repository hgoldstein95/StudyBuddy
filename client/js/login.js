Template.login.events({
	'click a#notUser': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', false);
	}
});

Template.login.events({
	'submit form': function(evt) {
		evt.preventDefault();
		Meteor.loginWithPassword(evt.target.username.value, evt.target.password.value);
		Template.navigation.drop();
		Router.go("/");
	}
});