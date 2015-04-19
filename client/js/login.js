Template.login.events({
	'click a#notUser': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', false);
	}
});