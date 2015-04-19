Template.login.events({
	'click a#notUser': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', false);
	}
});

Template.login.events({
	'submit form': function(evt) {
		evt.preventDefault();
		Accounts.loginWithPassword(evt.target.password.value);
		Router.go("/");
	}
});