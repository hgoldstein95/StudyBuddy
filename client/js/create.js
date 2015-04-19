Template.create.events({
	'submit form': function(evt) {
		evt.preventDefault();
		console.log(evt.target.firstName.value)
	}
});

Template.create.events({
	'click a#goBack': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', true);
	}
});